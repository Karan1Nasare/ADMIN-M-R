import React, { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from '../../utilities/axios-client'; // Adjust the path as needed

const EditCard = ({ isEdit, year, onEdit, fetchAcademicYears }) => {
  const [name, setName] = useState('');
  const [startDate1, setStartDate1] = useState(null);
  const [startDate2, setStartDate2] = useState(null);
  const datePickerRef1 = React.useRef(null);
  const datePickerRef2 = React.useRef(null);

  useEffect(() => {
    if (year) {
      setName(year.name);
      setStartDate1(new Date(year.start_year));
      setStartDate2(new Date(year.end_year));
    }
  }, [year]);

  const handleClick = () => {
    isEdit(false);
  };

  const handleIconClick1 = () => {
    datePickerRef1.current.setOpen(true);
  };

  const handleIconClick2 = () => {
    datePickerRef2.current.setOpen(true);
  };

  const handleUpdateClick = async () => {
    const updatedYear = {
      name,
      start_year: startDate1.toISOString().split('T')[0],
      end_year: startDate2.toISOString().split('T')[0],
    };

    console.log('Updated Year Data:', updatedYear); // Debugging statement

    try {
      const response = await axios.put(
        `/academic-years/${year.id}`,
        updatedYear,
      );
      console.log('Response:', response.data); // Debugging statement
      if (response.data.success) {
        onEdit();
        fetchAcademicYears(); // Refresh the list after updating
      } else {
        console.error('Error:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      isEdit(false); // Close the dialog immediately
      // Reload the page
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-start'>
      <div className='flex absolute flex-col px-8 py-7 text-sm text-white rounded-3xl border border-gray-700 border-solid bg-secondary__fill w-2/5'>
        <div className='flex gap-5 text-xl max-md:flex-wrap max-md:max-w-full'>
          <h1 className='flex-auto text-xl text-left my-auto'>
            Edit Academic Year
          </h1>
          <span
            onClick={handleClick}
            className='shrink-0 aspect-square w-[30px] cursor-pointer'
          >
            <IoCloseOutline />
          </span>
        </div>
        <div className='shrink-0 mt-5 h-px border border-solid bg-slate-500 border-slate-500 max-md:max-w-full' />
        <input
          className='bg-secondary__fill items-start text-left h-11 px-3 py-3.5 mt-11 whitespace-nowrap rounded border border-gray-700 border-solid max-md:pr-5 max-md:mt-10 max-md:max-w-full'
          type='text'
          placeholder='Aklavya'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div className='gap-5 justify-between mt-5 whitespace-nowrap w-full max-w-screen mx-auto grid grid-cols-2'>
          <div className='flex gap-4 justify-between px-3 py-2.5 rounded border border-gray-700 border-solid relative'>
            <DatePicker
              selected={startDate1}
              onChange={date => setStartDate1(date)}
              ref={datePickerRef1}
              className='hidden'
              popperPlacement='bottom-end'
              popperModifiers={[
                {
                  name: 'offset',
                  options: {
                    offset: [0, 10], // Adjust this value to fine-tune the position
                  },
                },
              ]}
            />
            <input
              className='bg-secondary__fill text-white border-none outline-none w-full'
              placeholder='yyyy-mm-dd'
              value={startDate1 ? startDate1.toLocaleDateString() : ''}
              readOnly
            />
            <span
              className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer'
              onClick={handleIconClick1}
            >
              <SlCalender />
            </span>
          </div>
          <div className='flex gap-4 justify-between px-3 py-2.5 rounded border border-gray-700 border-solid relative'>
            <DatePicker
              selected={startDate2}
              onChange={date => setStartDate2(date)}
              ref={datePickerRef2}
              className='hidden'
              popperPlacement='bottom-end'
              popperModifiers={[
                {
                  name: 'offset',
                  options: {
                    offset: [0, 10], // Adjust this value to fine-tune the position
                  },
                },
              ]}
            />
            <input
              className='bg-secondary__fill text-white border-none outline-none w-full'
              placeholder='yyyy-mm-dd'
              value={startDate2 ? startDate2.toLocaleDateString() : ''}
              readOnly
            />
            <span
              className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer'
              onClick={handleIconClick2}
            >
              <SlCalender />
            </span>
          </div>
        </div>
        <div
          onClick={handleUpdateClick}
          className='justify-center self-center px-7 py-3 mt-8 text-base text-center whitespace-nowrap bg-white rounded-lg text-slate-900 max-md:px-5 cursor-pointer'
        >
          Update
        </div>
      </div>
    </div>
  );
};

export default EditCard;

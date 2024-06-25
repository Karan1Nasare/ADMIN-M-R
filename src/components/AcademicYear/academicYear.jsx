import React, { useEffect, useState } from 'react';
import { LuPlusCircle } from 'react-icons/lu';
import { SlCalender } from 'react-icons/sl';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AcademicCard from './academicCard';
import EditCard from './editCard';
import axiosInstance from '../../utilities/axios-client';

const AcademicYear = () => {
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [academicYears, setAcademicYears] = useState([]);
  const [name, setName] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentYear, setCurrentYear] = useState(null);

  const fetchAcademicYears = async () => {
    try {
      const response = await axiosInstance.get('/academic-years');
      if (response.data.success) {
        setAcademicYears(response.data.data);
      } else {
        console.error('Error:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchAcademicYears();
  }, []);

  const handleAddClick = async () => {
    const newAcademicYear = {
      name,
      start_year: startDate.toISOString().split('T')[0],
      end_year: endDate.toISOString().split('T')[0],
    };

    try {
      if (editMode) {
        const response = await axiosInstance.put(
          `/academic-years/${currentYear.id}`,
          newAcademicYear,
        );
        if (response.data.success) {
          fetchAcademicYears(); // Refresh the list after updating
        } else {
          console.error('Error:', response.data.message);
        }
      } else {
        const response = await axiosInstance.post(
          '/academic-years',
          newAcademicYear,
        );
        if (response.data.success) {
          fetchAcademicYears(); // Refresh the list after adding
        } else {
          console.error('Error:', response.data.message);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setEditMode(false);
    setCurrentYear(null);
    setName('');
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const handleEdit = async updatedYear => {
    setAcademicYears(prevYears =>
      prevYears.map(year => (year.id === updatedYear?.id ? updatedYear : year)),
    );
    setEditMode(false);
  };

  const handleDelete = async yearId => {
    setAcademicYears(prevYears =>
      prevYears.filter(year => year?.id !== yearId),
    );
  };

  const startEdit = year => {
    setEditMode(true);
    setCurrentYear(year);
    setName(year.name);
    setStartDate(new Date(year.start_year));
    setEndDate(new Date(year.end_year));
  };

  return (
    <div className='mt-5 ml-8'>
      <h1 className='text-white text-left mb-6 text-3xl'>Academic Year</h1>
      <div className=''>
        <div className='p-8 text-sm rounded-xl border border-gray-700 border-solid bg-secondary__fill'>
          <h1 className='text-white max-md:max-w-full text-left mb-2'>Name</h1>
          <div className='flex '>
            <input
              className='justify-center h-10 text-white rounded border w-[100%] border-gray-700 bg-secondary__fill border-solid'
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className='w-full max-w-screen mx-auto grid grid-cols-2 gap-4 mt-6'>
            <div className=''>
              <h1 className='text-white text-left mb-2'>Start Year</h1>
              <div className='relative'>
                <div className='flex justify-between px-1 rounded border border-gray-700 bg-secondary__fill h-10 border-solid'>
                  <input
                    type='text'
                    placeholder='Select Date'
                    className='bg-secondary__fill text-stone-300'
                    value={startDate.toDateString()}
                    readOnly
                  />
                  <span
                    className='mt-3 ml-4 pr-2 text-white cursor-pointer'
                    onClick={() => setShowStartCalendar(!showStartCalendar)}
                  >
                    <SlCalender />
                  </span>
                </div>
                {showStartCalendar && (
                  <div className='absolute z-10'>
                    <Calendar
                      onChange={date => {
                        setStartDate(date);
                        setShowStartCalendar(false);
                      }}
                      value={startDate}
                      className='text-right'
                    />
                  </div>
                )}
              </div>
            </div>
            <div className='max-md:max-w-full'>
              <h1 className='text-white text-left mb-2'>End Year</h1>
              <div className='relative'>
                <div className='flex justify-between px-1 rounded border border-gray-700 bg-secondary__fill h-10 border-solid'>
                  <input
                    type='text'
                    placeholder='Select Date'
                    className='bg-secondary__fill text-stone-300'
                    value={endDate.toDateString()}
                    readOnly
                  />
                  <span
                    className='mt-3 ml-4 pr-2 text-white cursor-pointer'
                    onClick={() => setShowEndCalendar(!showEndCalendar)}
                  >
                    <SlCalender />
                  </span>
                </div>
                {showEndCalendar && (
                  <div className='absolute z-10'>
                    <Calendar
                      onChange={date => {
                        setEndDate(date);
                        setShowEndCalendar(false);
                      }}
                      value={endDate}
                      className='text-right'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className='flex h-12 mt-6 w-28 p-4 pt-3 rounded-md bg-white cursor-pointer'
            onClick={handleAddClick} // Connect the function here
          >
            <span className='mr-2 ml-2'>
              <LuPlusCircle style={{ fontSize: '1.5em' }} />
            </span>
            <button>ADD</button>
          </div>
        </div>
        <AcademicCard
          academicYears={academicYears}
          onEdit={startEdit}
          onDelete={handleDelete}
        />
      </div>
      {editMode && currentYear && (
        <EditCard
          isEdit={setEditMode}
          year={currentYear}
          onEdit={handleEdit}
          fetchAcademicYears={fetchAcademicYears}
        />
      )}
    </div>
  );
};

export default AcademicYear;

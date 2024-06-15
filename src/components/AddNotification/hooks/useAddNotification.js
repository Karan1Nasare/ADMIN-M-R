import { useEffect, useState } from 'react';

const useAddNotification = () => {
  const [adminData, setAdminData] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const data = filteredData.length > 0 ? filteredData : adminData;

  const openAdminDialog = () => {
    setIsEditOpen(true);
  };

  const closeAdminDialog = () => {
    setIsEditOpen(false);
  };

  const toggleChecked = index => {
    const updatedAdminData = [...adminData];

    updatedAdminData[index] = {
      ...updatedAdminData[index],
      isChecked: !updatedAdminData[index].isChecked,
    };

    setAdminData(updatedAdminData);
  };

  const selectAllAdmin = () => {
    const updatedAdminData = adminData.map(item => ({
      ...item,
      isChecked: true,
    }));
    setAdminData(updatedAdminData);
  };

  const hasCheckedAdmins = adminData.some(item => item.isChecked);

  const handleSearchClick = () => {
    console.log('handleSearchClick');
    if (searchInputValue.trim() === '') {
      setFilteredData([]);
      return;
    }

    const filtered = adminData.filter(
      card =>
        card.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
        card.enrollment
          .toLowerCase()
          .includes(searchInputValue.toLowerCase()) ||
        card.standard.toLowerCase().includes(searchInputValue.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const handleSearchInputChange = e => {
    setSearchInputValue(e.target.value);
    if (e.target.value.trim() === '') {
      setFilteredData([]);
    }
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const record = Array.from({ length: 6 }, (_, index) => ({
          name: `Chirag ${index}`,
          email: 'abcorg@gmail.com',
          number: '+91 6353264115',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
          standardName: 'Active Org',
          standard: '200',
          enrollment: 'wwww.mandreu...',
          enrollmentName: 'Website',
          id: index + 1,
          isChecked: false,
        }));

        setAdminData(record);
      };
      fetchData();
    } catch (error) {
      console.log('Error while fetching notifications', error);
    }
  }, []);

  return {
    data,
    isEditOpen,
    hasCheckedAdmins,
    searchInputValue,
    openAdminDialog,
    closeAdminDialog,
    toggleChecked,
    selectAllAdmin,
    handleSearchClick,
    handleSearchInputChange,
  };
};

export default useAddNotification;

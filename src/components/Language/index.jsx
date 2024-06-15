import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import axios from 'axios';
import LanguageHeader from './LanguageHeader/header';
import SearchBar from './LanguageHeader/searchBar';
import useLanguage from './hooks/useLanguage';
import LanguageCard from './LanguageCard/languageCard';
import Pagination from '../shared/Pagination';
import useLanguageManagement from './hooks/uselanguage2';

const ITEMS_PER_PAGE = 12;

const LanguageView = () => {
  const {
    languages: LanguageList,
    loading,
    error,
    fetchLanguages,
    updateLanguage,
    deleteLanguage,
    addLanguage,
    setLanguages,
  } = useLanguageManagement();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [addlanguageinput, setAddlanguageinput] = useState('');

  const totalItems = LanguageList?.length || 0;

  const lastCardIndex = currentPage * ITEMS_PER_PAGE;
  const firstCardIndex = lastCardIndex - ITEMS_PER_PAGE;
  // const currentItems = filteredItems.slice(firstCardIndex, lastCardIndex);

  const handleSearchChange = event => {
    const filteredItems = LanguageList?.filter(language =>
      language.name.toLowerCase().includes(searchTerm?.toLowerCase()),
    );
    if (event.target.value === '') {
      fetchLanguages();
    }
    setLanguages(filteredItems);
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };
  const handleaddLanguage = () => {
    if (addlanguageinput !== '') {
      addLanguage(addlanguageinput);
    }
  };
  useEffect(() => {
    fetchLanguages();
  }, []);
  return (
    <>
      <div className='h-full flex flex-col'>
        <Typography
          className='flex text-3xl align-items-start'
          variant='mainLayoutTitle'
        >
          Language
        </Typography>
        <LanguageHeader
          setAddlanguageinput={setAddlanguageinput}
          handleaddLanguage={handleaddLanguage}
        />
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
        <div className='mt-7'>
          {error && (
            <div className='text-center text-white'>
              {error?.response?.data?.data?.name[0]}
            </div>
          )}
          {/* {loading && <div className='text-center text-white'>Loading...</div>} */}
          <div className='grid lg:grid-cols-3 gap-7 sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1'>
            {LanguageList.map(({ name, id }) => (
              <LanguageCard
                updateLanguage={updateLanguage}
                deleteLanguage={deleteLanguage}
                key={id}
                title={name}
                id={id}
              />
            ))}
          </div>
        </div>
        {totalItems > ITEMS_PER_PAGE && (
          <div>
            <Pagination
              // totalCards={filteredItems.length}
              cardsPerPage={ITEMS_PER_PAGE}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageView;

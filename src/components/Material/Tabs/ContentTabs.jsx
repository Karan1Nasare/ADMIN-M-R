import React from 'react';
import Accordion from './Accordion';

const ContentTabs = () => {
  const data = [
    {
      chapter: 'પ્રકરણ - ૧ ભારતનો વારસો',
      subtopics: ['1.0 પ્રકરણ - ૧ भारतનો वारसो', '1.0 પ્રકરણ - ૧ भारतनो वारसो'],
      locked: true,
    },
    {
      chapter: 'પ્રકરણ - ૨ भारतनो वारसो',
      subtopics: ['1.0 પ્રકરણ - ૨ भारतनो वारसो', '1.0 प्रकरण - २ भारतनो वारसो'],
      locked: false,
    },
    {
      chapter: 'પ્રકરણ - ૨ भारतनो वारसो',
      subtopics: ['1.0 પ્રકરણ - ૨ भारतनो वारसो', '1.0 प्रकरण - २ भारतनो वारसो'],
      locked: false,
    },
    {
      chapter: 'પ્રકરણ - ૨ भारतनो वारसो',
      subtopics: ['1.0 પ્રકરણ - ૨ भारतनो वारसो', '1.0 प्रकरण - २ भारतनो वारसो'],
      locked: false,
    },
    {
      chapter: 'પ્રકરણ - ૨ भारतनो वारसो',
      subtopics: ['1.0 પ્રકરણ - ૨ भारतनो वारसो', '1.0 प्रकरण - २ भारतनो वारसो'],
      locked: false,
    },
    {
      chapter: 'પ્રકરણ - ૨ भारतनो वारसो',
      subtopics: ['1.0 પ્રકરણ - ૨ भारतनो वारसो', '1.0 प्रकरण - २ भारतनो वारसो'],
      locked: false,
    },
    {
      chapter: 'પ્રકરણ - ૨ भारतनो वारसो',
      subtopics: ['1.0 પ્રકરણ - ૨ भारतनो वारसो', '1.0 प्रकरण - २ भारतनो वारसो'],
      locked: false,
    },
    {
      chapter: 'પ્રકરણ - ૨ भारतनो वारसो',
      subtopics: ['1.0 પ્રકરણ - ૨ भारतनो वारसो', '1.0 प्रकरण - २ भारतनो वारसो'],
      locked: false,
    },
    {
      chapter: 'પ્રકરણ - ૨ भारतनो वारसो',
      subtopics: ['1.0 પ્રકરણ - ૨ भारतनो वारसो', '1.0 प्रकरण - २ भारतनो वारसो'],
      locked: false,
    },
    {
      chapter: 'પ્રકરણ - ૨ भारतनो वारसो',
      subtopics: ['1.0 પ્રકરણ - ૨ भारतनो वारसो', '1.0 प्रकरण - २ भारतनो वारसो'],
      locked: false,
    },
  ];

  return (
    <div className='min-h-screen text-white p-6'>
      <div className='space-y-4'>
        {data.map((item, index) => (
          <Accordion
            key={index}
            chapter={item.chapter}
            subtopics={item.subtopics}
            locked={item.locked}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentTabs;

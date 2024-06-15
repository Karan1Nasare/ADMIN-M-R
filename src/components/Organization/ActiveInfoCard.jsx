import React from 'react';

function ActiveInfoCard({
  tital,
  CircleColor,
  bageColor,
  bageColorLight,
  count,
}) {
  return (
    <div className='flex items-center h-full'>
      <div className={`bg-${CircleColor} w-14 h-14 rounded-full`} />
      <div className='ml-1 p-3'>
        {/* <div className='w-24 h-24 bg-bright_green'></div> */}
        <div>
          {' '}
          <p className='text-grey__primary__light text-[12px]'>{tital}</p>
          <div
            className={`bg-${bageColorLight} w-[60px] mt-2 text-${bageColor} rounded-full p-1.5 bg-opacity-25 text-xs text-center `}
          >
            {count}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveInfoCard;

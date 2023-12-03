import React, { useEffect, useState } from "react";

function Search({ selectedTag }) {
  const tags = [
    {
      id: 1,
      name: "Semua",
    },
    {
      id: 2,
      name: "Disabilitas",
    },
    {
      id: 3,
      name: "Cyber",
    },
    {
      id: 4,
      name: "Rasial",
    },
    {
      id: 5,
      name: "Fisik",
    },
    {
      id: 6,
      name: "Verbal",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex bg-color8'>
      {/* Filter di sebelah kiri */}
      <div className='flex gap-3 mt-10 mx-20'>
        {tags.map((item, index) => (
          <ul
            key={item.id}
            onClick={() => {
              setActiveIndex(index);
              selectedTag(item.name);
            }}
            className={`${
              index === activeIndex ? 'bg-color5 text-white' : null
            } font-jakarta text-[0.9rem] p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-color5 transition-all duration-100 ease-in-out my-auto`}
          >
            <li className='line-clamp-1'>{item.name}</li>
          </ul>
        ))}
      </div>
  
      {/* Search bar di sebelah kanan */}
      <div className='ml-auto flex gap-3 mt-10 mx-20'>
        <div className='flex items-center rounded-lg overflow-hidden border border-color5'>
          <input
            type='text'
            className='font-jakarta text-[0.9rem] px-3 border-none'
            placeholder='Cari cerita...'
          />
          <button className='bg-color5 text-white font-jakarta text-[0.9rem] px-3 h-full'>
            Search
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default Search;

import React, { useEffect, useState } from "react";

function Filter() {
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
          {/* Bagian kiri */}
          <div className='ml-20 mt-10 mb-10 mx-20'>
            <h1 className="font-jakarta font-bold text-xl">Kegiatan yang akan datang</h1>
          </div>
    
          {/* Bagian kanan */}
          <div className='flex ml-auto mr-20 mt-10 mb-10'>
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
        </div>
      );
}

export default Filter
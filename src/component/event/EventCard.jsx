import React, { useState, useEffect } from 'react';
import axios from "axios";


function EventCard({posts}) {

    const [data, setData] = useState([]); // Initialize data as an empty array

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            'https://655c3345ab37729791aa0ce7.mockapi.io/articles/'
          );
          setData(response.data); // Update data with the fetched data
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className='flex bg-color8'>
          <div className='mx-auto mt-0 px-10 md:px-15 lg:px-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-10 mb-10 px-10 md:px-15 lg:px-32'>
              {posts.map((item) => (
                <div
                  key={item.id}
                  className='m-4 cursor-pointer bg-white border border-gray-300 rounded-lg overflow-hidden'
                >
                  <img
                    src={item.image}
                    className='w-full rounded-tl-lg rounded-tr-lg object-cover h-[200px]'
                    alt={item.title}
                  />
                  <h3 className='font-jakarta font-bold mt-3 mb-2 mx-2'>{item.title}</h3>
                  <h3 className='font-jakarta line-clamp-3 text-gray-400 mb-4 mx-2'>{item.content}</h3>
                  <div className='flex items-center justify-between px-2 mt-5 mb-5 mx-1'>
                    <div className='flex items-center'>
                      <img src={item.avatar} className='w-[35px] rounded-full mr-2' alt='Avatar' />
                      <div>
                        <h3 className='font-jakarta font-bold text-[12px]'>{item.author}</h3>
                        <h3 className='text-black font-jakarta text-[10px]'>{item.date}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a href='/halaman-baru' className='font-jakarta block text-center text-blue-500 hover:underline mt-10 mb-6'>
              Lihat Lainnya ...
            </a>
          </div>
        </div>
  )
}

export default EventCard
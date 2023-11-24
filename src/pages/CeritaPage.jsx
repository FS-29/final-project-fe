import React, { useEffect, useState } from 'react'

import axios from "axios";

function CeritaPage({posts}) {
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
        <div className='flex bg-color7'> 
             <div className='mx-auto mt-10 px-10 md:px-15 lg:px-32'>
                <h1 className='font-jakarta font-bold text-4xl leading-normal text-center mb-4'>Berbagi Cerita Dari Teman Kita</h1>
                <h2 className='font-jakarta font-normal text-xl text-center'>Berbagi cerita dengan teman kita yang mengalami perudungan </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto
                     mt-10 mb-10 px-10 md:px-15 lg:px-32'>
                     {posts.map((item)=>(
                <div key={item.id} className='m-4 cursor-pointer bg-color8 border border-gray-300 rounded-lg overflow-hidden' >
                     <img src={item.image} className='w-full rounded-tl-lg rounded-tr-lg object-cover h-[200px]'/>
                    <h3 className='font-jakarta font-bold mt-3 mb-2 mx-2'>{item.title}</h3>
                    <h3 className='font-jakarta line-clamp-3 text-gray-400 mb-4 mx-2'>{item.content}</h3>
                </div>
                ))}
            </div>
            <a href="/halaman-baru" className='font-jakarta block text-center text-blue-500 hover:underline'>Lihat Lainnya ...</a>
            </div>
        </div>
     
      
    )
}

export default CeritaPage
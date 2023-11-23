import React, { useEffect, useState } from 'react'
import API from '../Services/API'
import axios from "axios";


function CeritaKorban({posts}) {

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
    <div className='mx-auto mt-10 px-10 md:px-15 lg:px-32'>
      <h1 className='text-center text-2xl font-bold mb-4'>Berbagi Cerita Dari Teman Kita</h1>
      <h2 className='text-center'>Berbagi cerita dengan teman kita yang mengalami perudungan </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto
      mt-10 mb-10 px-10 md:px-15 lg:px-32'>
      {posts.map((item)=>(
        <div key={item.id} className='m-4 cursor-pointer border border-gray-300 rounded-lg overflow-hidden' >
           <img src={item.image} className='w-full rounded-tl-lg rounded-tr-lg object-cover h-[200px]'/>
           <h3 className='font-bold mt-3 mb-2 mx-2'>{item.title}</h3>
           <h3 className='line-clamp-3 text-gray-400 mb-4 mx-2'>{item.content}</h3>
        </div>
      ))}
       
    </div>
    </div>
    
  )
}

export default CeritaKorban
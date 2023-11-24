import React, { useEffect, useState } from 'react'
import axios from "axios";


function BeritaComp({ posts }) {
  return (
    <div className='flex bg-color6'>
      <div className='mx-auto mt-10 px-10 md:px-15 lg:px-32'>
        <h1 className='font-jakarta font-bold text-4xl leading-normal text-center mb-4'>Perundungan Bukanlah Berita Biasa</h1>
        <h2 className='font-jakarta font-normal text-xl text-center'>Menyuarakan Keadilan: Pelaporan dan Tindakan Terhadap Perundungan</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
          {/* Kartu di sebelah kiri */}
          <div className='col-span-2 mb-4 border border-gray-400 rounded-lg overflow-hidden bg-white'>
            {posts[0] && (
              <div key={posts[0].id}>
                <img src={posts[0].image} className='w-full rounded-tl-lg rounded-tr-lg object-cover h-[300px]' alt={posts[0].title} />
                <div className='p-4'>
                  <h3 className='font-jakarta font-bold mt-3 mb-2'>{posts[0].title}</h3>
                  <p className='font-jakarta line-clamp-3 text-gray-400 mb-4'>{posts[0].content}</p>
                </div>
              </div>
            )}
          </div>
          {/* Kartu-kartu di sebelah kanan */}
          <div className='col-span-2 grid grid-cols-1 gap-4'>
            {posts.slice(1).map((item) => (
              <div key={item.id} className='border border-gray-400 rounded-lg overflow-hidden flex bg-white'>
                <img src={item.image} className='w-1/2 rounded-tl-lg rounded-bl-lg object-cover h-[300px]' alt={item.title} />
                <div className='p-4 w-1/2'>
                  <h3 className='font-jakarta font-bold mt-3 mb-2'>{item.title}</h3>
                  <p className='font-jakarta line-clamp-3 text-gray-400 mb-4'>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <a href="/halaman-baru" className='block text-center text-blue-500 mt-10 mb-6 hover:underline'>Lihat Lainnya ...</a>
      </div>
    </div>
  );
  }

export default BeritaComp
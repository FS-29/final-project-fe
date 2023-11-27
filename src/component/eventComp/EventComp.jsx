import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function EventComp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://655c3345ab37729791aa0ce7.mockapi.io/articles/'
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Configure settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='flex bg-color7'>
      <div className='mx-auto mt-10 px-10 md:px-15 lg:px-32'>
        <Slider {...sliderSettings}>
          {data.map((item) => (
            <div key={item.id} className='m-4 cursor-pointer'>
              <div className='bg-white border border-gray-300 rounded-lg overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full rounded-tl-lg rounded-tr-lg object-cover h-[200px]'
                />
                <h3 className='font-jakarta font-bold mt-3 mb-2 mx-2'>{item.title}</h3>
                <p className='font-jakarta line-clamp-3 text-gray-400 mb-4 mx-2'>{item.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default EventComp;

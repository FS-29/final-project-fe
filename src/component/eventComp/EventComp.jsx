import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function EventComp({ posts }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://655c3345ab37729791aa0ce7.mockapi.io/articles/"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex bg-color7">
      <div className="mx-auto mt-10 px-10 md:px-15 lg:px-32">
        <h1 className="font-jakarta font-bold text-4xl leading-normal text-center mb-4">
          Satu Tindakan Baik Bisa Membuat Perbedaan Besar
        </h1>
        <h2 className="font-jakarta font-normal text-xl text-center">
          Perubahan Dimulai di Sini: Event Anti-Bullying Community
        </h2>
        <div className="mt-10 mb-10">
          {" "}
          <Slider {...sliderSettings}>
            {posts.map((item) => (
              <div key={item.id} className="m-4 cursor-pointer">
                <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover aspect-w-1 aspect-h-1 rounded-tl-lg rounded-tr-lg"
                  />
                  <h3 className="font-jakarta font-bold mt-3 mb-2 mx-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center items-center flex-col bg-color3 rounded-lg mt-10 mb-10">
          <img
            src="" // Replace 'logo.png' with your actual logo file path
            alt="Logo"
            className="w-20 h-20 mt-8" // Adjust width and height as needed
          />
          <div className="text-center mb-8">
            <h1 className="font-jakarta font-bold text-xl text-black mx-4">
            "Ketika kita menyatukan kekuatan kita melawan perundungan, kita menciptakan dunia yang lebih aman dan lebih baik untuk semua orang."
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventComp;

import React, { useCallback, useEffect, useState } from "react";
import headerLogo from "../../assets/img/Logo.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import axios from "axios";

function EventComp({ posts }) {
  const [data, setData] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {posts.map((item) => (
                <div
                  key={item.id}
                  className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] hover:shadow-md w-full md:min-w-lg max-w-xl border border-gray-300  bg-white rounded-lg m-4 cursor-pointer"
                >
                  <div className="embla__slide__inner flex">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover h-full md:h-[200px] rounded-s-lg"
                    />
                    <h3 className="font-jakarta font-bold mt-3 mb-2 mx-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-2">
              <button
                className="embla__prev font-bold text-white bg-color5 shadow-md py-1 px-3 rounded-lg"
                onClick={scrollPrev}
              >
                Prev
              </button>
              <button
                className="embla__next font-bold text-white bg-color5 shadow-md py-1 px-3 rounded-lg"
                onClick={scrollNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col bg-color3 rounded-lg mt-10 mb-10">
          <img
            src={headerLogo}
            className="w-12 hover:scale-110 transition-all duration-100 my-5"
            alt="Safe Space Squad"
          />
          <div className="text-center mb-8">
            <h1 className="font-jakarta font-bold text-xl text-black mx-4">
              "Ketika kita menyatukan kekuatan kita melawan perundungan, kita
              menciptakan dunia yang lebih aman dan lebih baik untuk semua
              orang."
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventComp;

import React, { useState, useEffect } from "react";
import CeritaCard from "../component/ceritaComp/CeritaCard";
import Search from "../component/ceritaComp/Search";
import APICerita from "../Sevices/APICerita";
import cerita1 from "../assets/svg/cerita1.svg";
import cerita2 from "../assets/svg/cerita2.svg";

function CeritaPage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    APICerita.getPost.then((resp) => {
      const result = resp.data.map((item) => ({
        id: item.id,
        title: item.title, // Ubah sesuai dengan struktur data yang benar
        content: item.content, // Ubah sesuai dengan struktur data yang benar
        image: item.image,
        author: item.author,
        avatar: item.avatar,
        date: item.date,
      }));
      setPost(result);
    });
  };

  return (
    <>
      <div className="relative min-h-[400px]">
        <div className="flex flex-row justify-center px-12 pt-24">
          <div className="flex flex-col gap-4 items-center font-jakarta max-w-6xl">
            <h1 className="font-extrabold text-center text-3xl">
              Meruntuhkan Dinding Perundungan: Cerita Seorang Korban yang
              Bangkit
            </h1>
            <p className="font-medium text-center text-2xl">
              Ingin mengetahui lebih lanjut tentang pengalaman perundungan yang
              dialami oleh teman kita? Ayo, simak ceritanya secara lengkap!
            </p>
          </div>
        </div>
        <img
            className="absolute left-0 bottom-0 -z-10"
            src={cerita1}
            alt="cerita1"
          />
          <img
            className="absolute right-0 bottom-0 -z-10"
            src={cerita2}
            alt="cerita2"
          />
      </div>

      <div>
        <Search></Search>
        {post.length > 0 ? <CeritaCard posts={post} /> : null}
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}

export default CeritaPage;

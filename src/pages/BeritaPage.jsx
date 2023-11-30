import React, { useState, useEffect } from "react";
import APICerita from "../Sevices/APICerita";
import SearchFilter from "../component/beritaComp/SearchFilter";
import berita1 from "../assets/svg/berita1.svg";
import berita2 from "../assets/svg/berita2.svg";
import BeritaCard from "../component/beritaComp/BeritaCard";
import Footer from "../component/footer/footer";
import BeritaIntro from "../component/beritaComp/BeritaIntro";

function BeritaPage() {
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
      <div className="relative">
        <div className="flex flex-row justify-center px-12 pt-24 min-h-[400px]">
          <div className="flex flex-col gap-4 items-center font-jakarta max-w-6xl">
            <h1 className="font-extrabold text-center text-3xl">
              Masih Sering Terjadi Perudungan Pada Kalangan Semua Generasi
            </h1>
            <p className="font-medium text-center text-2xl">
              Perundungan yang dialami oleh teman kita? Ayo, baca lebih berita
              berikut!
            </p>
          </div>
        </div>
        <img
          className="absolute left-0 bottom-0 -z-10"
          src={berita1}
          alt="berita1"
        />
        <img
          className="absolute right-0 bottom-0 -z-10"
          src={berita2}
          alt="berita2"
        />
      </div>
      <SearchFilter></SearchFilter>
      <div className="bg-color8">
        {post.length > 0 ? <BeritaIntro post={post[0]} /> : null}
        {post.length > 0 ? <BeritaCard posts={post} /> : null}
      </div>
      <Footer></Footer>
    </>
  );
}

export default BeritaPage;

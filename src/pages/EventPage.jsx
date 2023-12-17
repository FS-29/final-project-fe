import React, { useState, useEffect } from "react";
import Filter from "../component/event/filter";
import APICerita from "../Sevices/APICerita";
import EventCard from "../component/event/EventCard";
import event1 from "../assets/svg/event1.svg";
import event2 from "../assets/svg/event2.svg";

function EventPage() {
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
              Panggilan untuk Kebaikan: Mari Bersama Hentikan Perundungan!
            </h1>
            <p className="font-medium text-center text-2xl">
              Tertarik dengan berbagai kegiatan sebagai salah satu partisipan
              pencegahan perudungan? Ikuti dan cari tahu kegiatan lainnya!
            </p>
          </div>
        </div>
        <img
          className="absolute left-0 bottom-0 -z-10"
          src={event1}
          alt="event1"
        />
        <img
          className="absolute right-0 bottom-0 -z-10"
          src={event2}
          alt="event2"
        />
      </div>

      <Filter></Filter>
      {post.length > 0 ? <EventCard posts={post} /> : null}
      {/* <Footer></Footer> */}
    </>
  );
}

export default EventPage;

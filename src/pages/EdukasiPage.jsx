import { useState } from "react";
import poster1 from "../assets/svg/edukasiPoster1.svg";
import poster2 from "../assets/svg/edukasiPoster2.svg";
import BtnSideBar from "../component/edukasi/BtnSideBar";
import ContentEdukasi from "../component/edukasi/ContentEdukasi";

function EdukasiPage() {
  const [contentId, setContentId] = useState(1);
  console.log(contentId);
  return (
    <>
      <div className="flex flex-row justify-center px-12 pt-24">
        <div className="flex flex-col gap-4 items-center font-jakarta max-w-6xl">
          <h1 className="font-extrabold text-center text-3xl">
            Jangan Diam, Jangan Takut: Belajar dan Melawan Bullying
          </h1>
          <p className="font-medium text-center text-2xl">
            Edukasi adalah kunci untuk mencegah perundungan. Dengan memahami
            edukasi bullying orang - orang lebih mungkin untuk menghindari
            tindakan perundungan dan mengambil tindakan pencegahan.
          </p>
        </div>
      </div>
      <div className="h-80 overflow-hidden">
        <img
          className="absolute -left-52 top-64 -z-10"
          src={poster1}
          alt="poster1"
        />
        <img
          className="absolute right-0 top-64 -z-10"
          src={poster2}
          alt="poster2"
        />
      </div>
      <div className="flex flex-row justify-center px-12 py-8 bg-white border-b-4 border-slate-200">
        <h1 className="font-jakarta font-extrabold text-center text-3xl">
          Edukasi Bullying
        </h1>
      </div>
      <div className="flex flex-row bg-white">
        <div className="flex flex-col border-e-4 border-slate-200 w-1/4 max-w-xs gap-4 py-16 px-5">
        <BtnSideBar
              onClickEvent={() => setContentId(1)}
              isActive={contentId}
              idBtn={1}
              text={"Definisi Bullying"}
            ></BtnSideBar>
            <BtnSideBar
              onClickEvent={() => setContentId(2)}
              isActive={contentId}
              idBtn={2}
              text={"Kategori Bullying"}
            ></BtnSideBar>
            <BtnSideBar
              onClickEvent={() => setContentId(3)}
              isActive={contentId}
              idBtn={3}
              text={"Tanda-Tanda Bullying"}
            ></BtnSideBar>
            <BtnSideBar
              onClickEvent={() => setContentId(4)}
              isActive={contentId}
              idBtn={4}
              text={"Dampak Bullying"}
            ></BtnSideBar>
            <BtnSideBar
              onClickEvent={() => setContentId(5)}
              isActive={contentId}
              idBtn={5}
              text={"Peran Penonton"}
            ></BtnSideBar>
            <BtnSideBar
              onClickEvent={() => setContentId(6)}
              isActive={contentId}
              idBtn={6}
              text={"Pencegahan Bullying"}
            ></BtnSideBar>
            <BtnSideBar
              onClickEvent={() => setContentId(7)}
              isActive={contentId}
              idBtn={7}
              text={"Peran Orang Tua"}
            ></BtnSideBar>
        </div>
        <div className="flex flex-col items-center p-16 w-3/4">
        <ContentEdukasi idContent={contentId}></ContentEdukasi>
        </div>
      </div>
    </>
  );
}

export default EdukasiPage;

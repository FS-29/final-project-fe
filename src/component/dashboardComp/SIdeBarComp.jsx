import { useDispatch, useSelector } from "react-redux";
import BtnComp from "./BtnComp";
import DataUser from "../../assets/svg/DataUser";
import AlamatUser from "../../assets/svg/AlamatUser";
import SekolahUsser from "../../assets/svg/SekolahUser";
import LaporanUser from "../../assets/svg/LaporanUser";
import PesanUser from "../../assets/svg/PesanUser";
import BeritaAdmin from "../../assets/svg/BeritaAdmin";
import EventAdmin from "../../assets/svg/EventAdmin";
import PendidikanKonselor from "../../assets/svg/PendidikanKonselor";


function SideBarComp({}) {
  const { role } = useSelector((state) => state.profilUser);
  switch (role) {
    case 1:
      return (
        <div className="flex flex-col gap-3">
          <BtnComp
            iconbtn={<DataUser styleSVG={"fill-white"}></DataUser>}
            text={"Data Pribadi"}
            idBtn={1}
          ></BtnComp>
          <BtnComp
            iconbtn={<AlamatUser styleSVG={"fill-white"}></AlamatUser>}
            text={"Alamat"}
            idBtn={2}
          ></BtnComp>
          <BtnComp
            iconbtn={<SekolahUsser styleSVG={"fill-white"}></SekolahUsser>}
            text={"Sekolah"}
            idBtn={3}
          ></BtnComp>
          <BtnComp
            iconbtn={<LaporanUser styleSVG={"fill-white"}></LaporanUser>}
            text={"Laporan"}
            idBtn={4}
          ></BtnComp>
          <BtnComp
            iconbtn={<PesanUser styleSVG={"fill-white"}></PesanUser>}
            text={"Pesan"}
            idBtn={5}
          ></BtnComp>
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col gap-3">
          <BtnComp
            iconbtn={<DataUser styleSVG={"fill-white"}></DataUser>}
            text={"Data Pribadi"}
            idBtn={1}
          ></BtnComp>
          <BtnComp
            iconbtn={<PendidikanKonselor styleSVG={"fill-white"}></PendidikanKonselor>}
            text={"Pendidikan"}
            idBtn={2}
          ></BtnComp>
          <BtnComp
            iconbtn={<LaporanUser styleSVG={"fill-white"}></LaporanUser>}
            text={"Laporan"}
            idBtn={3}
          ></BtnComp>
          <BtnComp
            iconbtn={<PesanUser styleSVG={"fill-white"}></PesanUser>}
            text={"Pesan"}
            idBtn={4}
          ></BtnComp>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col gap-3">
          <BtnComp
            iconbtn={<DataUser styleSVG={"fill-white"}></DataUser>}
            text={"Data Pribadi"}
            idBtn={1}
          ></BtnComp>
          <BtnComp
            iconbtn={<LaporanUser styleSVG={"fill-white"}></LaporanUser>}
            text={"Laporan"}
            idBtn={2}
          ></BtnComp>
          <BtnComp
            iconbtn={<PesanUser styleSVG={"fill-white"}></PesanUser>}
            text={"Pesan"}
            idBtn={3}
          ></BtnComp>
          <BtnComp
            iconbtn={<BeritaAdmin styleSVG={"fill-white"}></BeritaAdmin>}
            text={"Berita"}
            idBtn={4}
          ></BtnComp>
          <BtnComp
            iconbtn={<EventAdmin styleSVG={"fill-white"}></EventAdmin>}
            text={"Event"}
            idBtn={5}
          ></BtnComp>
        </div>
      );

    default:
      return <h1>belum terdaftar role</h1>;
  }
}
export default SideBarComp;

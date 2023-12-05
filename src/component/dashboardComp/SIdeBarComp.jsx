import { useDispatch, useSelector } from "react-redux";
import BtnComp from "./BtnComp";
import DataUser from "../../assets/svg/DataUser";
import AlamatUser from "../../assets/svg/AlamatUser";
import SekolahUsser from "../../assets/svg/SekolahUser";
import LaporanUser from "../../assets/svg/LaporanUser";
import PesanUser from "../../assets/svg/PesanUser";
import OutLogo from "../../assets/svg/OutLogo";

function SideBarComp({}) {
  const { role } = useSelector((state) => state.profilUser);
  switch (role) {
    case 1:
      return (
        <div className="flex flex-col gap-3">
          <BtnComp
            iconbtn={<DataUser styleSVG={"fill-white"}></DataUser>}
            text={"Data Pribadi"}
          ></BtnComp>
          <BtnComp
            iconbtn={<AlamatUser styleSVG={"fill-white"}></AlamatUser>}
            text={"Alamat"}
          ></BtnComp>
          <BtnComp
            iconbtn={<SekolahUsser styleSVG={"fill-white"}></SekolahUsser>}
            text={"Sekolah"}
          ></BtnComp>
          <BtnComp
            iconbtn={<LaporanUser styleSVG={"fill-white"}></LaporanUser>}
            text={"Laporan"}
          ></BtnComp>
          <BtnComp
            iconbtn={<PesanUser styleSVG={"fill-white"}></PesanUser>}
            text={"Pesan"}
          ></BtnComp>
          <BtnComp
            iconbtn={<OutLogo styleSVG={"stroke-white"}></OutLogo>}
            text={"Keluar"}
          ></BtnComp>
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col gap-3">
          <BtnComp
            iconbtn={<DataUser styleSVG={"fill-white"}></DataUser>}
            text={"Data Pribadi"}
          ></BtnComp>
          <BtnComp
            iconbtn={<AlamatUser styleSVG={"fill-white"}></AlamatUser>}
            text={"Alamat"}
          ></BtnComp>
          <BtnComp
            iconbtn={<SekolahUsser styleSVG={"fill-white"}></SekolahUsser>}
            text={"Sekolah"}
          ></BtnComp>
          <BtnComp
            iconbtn={<LaporanUser styleSVG={"fill-white"}></LaporanUser>}
            text={"Laporan"}
          ></BtnComp>
          <BtnComp
            iconbtn={<PesanUser styleSVG={"fill-white"}></PesanUser>}
            text={"Pesan"}
          ></BtnComp>
          <BtnComp
            iconbtn={<OutLogo styleSVG={"stroke-white"}></OutLogo>}
            text={"Keluar"}
          ></BtnComp>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col gap-3">
          <BtnComp
            iconbtn={<DataUser styleSVG={"fill-white"}></DataUser>}
            text={"Data Pribadi"}
          ></BtnComp>
          <BtnComp
            iconbtn={<AlamatUser styleSVG={"fill-white"}></AlamatUser>}
            text={"Alamat"}
          ></BtnComp>
          <BtnComp
            iconbtn={<SekolahUsser styleSVG={"fill-white"}></SekolahUsser>}
            text={"Sekolah"}
          ></BtnComp>
          <BtnComp
            iconbtn={<LaporanUser styleSVG={"fill-white"}></LaporanUser>}
            text={"Laporan"}
          ></BtnComp>
          <BtnComp
            iconbtn={<PesanUser styleSVG={"fill-white"}></PesanUser>}
            text={"Pesan"}
          ></BtnComp>
          <BtnComp
            iconbtn={<OutLogo styleSVG={"stroke-white"}></OutLogo>}
            text={"Keluar"}
          ></BtnComp>
        </div>
      );

    default:
      return <h1>belum terdaftar role</h1>;
  }
}
export default SideBarComp;

import { useDispatch, useSelector } from "react-redux";
import DataPribadi from "./DataPribadi";
import EditProfil from "./EditProfil";
import AlamatDash from "./pelapor/AlamatDash";
import SekolahDash from "./pelapor/SekolahDash";
import LaporanPelapor from "./pelapor/LaporanPelapor";
import PesanDash from "./PesanDash";
import LaporanAdmin from "./Admin/LaporanAdmin";
import BeritaDash from "./Admin/BeritaDash";
import EventDash from "./Admin/EventDash";
import LaporanKonselor from "./Konselor/LaporanKonselor";
import PendidikanDashKon from "./Konselor/PendidikanDashKon";


function ContentComp() {
  const { role } = useSelector((state) => state.profilUser);
  const { contentId } = useSelector((state) => state.dashUser);
  switch (role) {
    case 1:
      return (
        <>
          {contentId == 0 ? <EditProfil></EditProfil> : <></>}
          {contentId == 1 ? <DataPribadi></DataPribadi> : <></>}
          {contentId == 2 ? <AlamatDash></AlamatDash> : <></>}
          {contentId == 3 ? <SekolahDash></SekolahDash> : <></>}
          {contentId == 4 ? <LaporanPelapor></LaporanPelapor> : <></>}
          {contentId == 5 ? <PesanDash></PesanDash> : <></>}
        </>
      );
    case 2:
      return (
        <>
          {contentId == 0 ? <EditProfil></EditProfil> : <></>}
          {contentId == 1 ? <DataPribadi></DataPribadi> : <></>}
          {contentId == 2 ? <PendidikanDashKon></PendidikanDashKon> : <></>}
          {contentId == 3 ? <LaporanKonselor></LaporanKonselor> : <></>}
          {contentId == 4 ? <PesanDash></PesanDash> : <></>}
        </>
      );
    case 3:
      return (
        <>
          {contentId == 0 ? <EditProfil></EditProfil> : <></>}
          {contentId == 1 ? <DataPribadi></DataPribadi> : <></>}
          {contentId == 2 ? <LaporanAdmin></LaporanAdmin> : <></>}
          {contentId == 3 ? <PesanDash></PesanDash> : <></>}
          {contentId == 4 ? <BeritaDash></BeritaDash> : <></>}
          {contentId == 5 ? <EventDash></EventDash> : <></>}
          
          
        </>
      );

    default:
      return <h1>belum terdaftar role</h1>;
  }
}

export default ContentComp;

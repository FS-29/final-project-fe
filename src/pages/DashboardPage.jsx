import ContentComp from "../component/dashboardComp/ContentComp";
import ProfilView from "../component/dashboardComp/ProfilVIew";
import SideBarComp from "../component/dashboardComp/SIdeBarComp";
import OutLogo from "../assets/svg/OutLogo";
import { useDispatch, useSelector } from "react-redux";
import { isLogout } from "../redux/reducers/auth-reducers";
import { useNavigate } from "react-router-dom";
import { delProfilV } from "../redux/reducers/profil-reducer";


function DashboardPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogout() {
    dispatch(isLogout())
    dispatch(delProfilV())
    navigate("/login")
  }
  return (
    <>
      <div className="flex flex-row font-jakarta">
        <div className="flex flex-col justify-start gap-3 w-1/4 max-w-xs px-4 py-10 border-e-4 border-solid border-gray-200 ">
          <ProfilView></ProfilView>
          <SideBarComp></SideBarComp>
          <button
            onClick={handleLogout}
            className={`border-white bg-color6 text-gray-400 hover:shadow-none hover:bg-color3 rounded-2xl border-4 active:bg-color4 active:text-color7 active:border-color7
            shadow-xl p-4 text-left font-jakarta font-semibold flex flex-row gap-4 items-center`}
          >
            <OutLogo styleSVG={"stroke-white fill-none"}></OutLogo>
            <h2>Keluar</h2>
          </button>
        </div>
        <div className="w-3/4">
          <ContentComp></ContentComp>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;

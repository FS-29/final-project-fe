import BtnProfil from "./BtnProfil";
import PersonLogo from "../../assets/svg/PersonLogo";
import OutLogo from "../../assets/svg/OutLogo";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogout } from "../../redux/reducers/auth-reducers";
import { delProfilV } from "../../redux/reducers/profil-reducer";

function FloatingProfil({ img }) {
  const { foto, username } = useSelector((state) => state.profilUser);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleLogout() {
    dispatch(isLogout())
    dispatch(delProfilV())
    navigate("/login")
  }
  // console.log(foto,username);

  return (
    <div className="flex gap-6 flex-col justify-start items-center w-56 pt-10 pb-5 rounded-2xl border-solid border-4  border-white bg-color3  shadow-2xl">
      <div className="flex flex-col items-center gap-2">
        <img
          src={foto==null?img:foto}
          alt="profil picture"
          className="h-28 w-28 rounded-full"
        />
        <h3 className="text-violet-10 text-xl font-extrabold font-jakarta">
        {username}
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <NavLink to="/dashboard">
          <BtnProfil
            icons={
              <PersonLogo
                styleSVG={"fill-black group-hover:fill-gray-100 w-7 h-7"}
              ></PersonLogo>
            }
            text={"Dashboard"}
          ></BtnProfil>
        </NavLink>
        <button onClick={handleLogout}>
          <BtnProfil
            icons={
              <OutLogo
                styleSVG={
                  "w-7 h-7 stroke-black group-hover:stroke-gray-100 fill-none"
                }
              ></OutLogo>
            }
            text={"Keluar"}
          ></BtnProfil>
        </button>
      </div>
    </div>
  );
}

export default FloatingProfil;

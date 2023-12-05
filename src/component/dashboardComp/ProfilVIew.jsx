import { useDispatch, useSelector } from "react-redux";
import img from "../../assets/svg/profilPolos.svg";


function ProfilView() {
    const {foto} = useSelector((state)=>state.profilUser)
    return(
        <div className="flex flex-col items-center py-4">
            <img
          src={foto==null?img:foto}
          alt="profil picture"
          className="h-36 w-36 rounded-full"
        />
            <button className="text-lg font-bold text-gray-500 hover:text-gray-700">Ubah Foto</button>
        </div>
    )
}
export default ProfilView
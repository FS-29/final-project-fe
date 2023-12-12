import { useState } from "react";
import UpLogo from "../../assets/svg/UpLogo";
import img from "../../assets/svg/profilPolos.svg";

function EditProfil() {
  const [urlImg,setUrlImg] = useState('')
  function imgPreview(e) {
    if (e.target.value!="") {
      const src = URL.createObjectURL(e.target.files[0]) 
      setUrlImg(src)  
    }
  }
  return (
    <div className="flex justify-center items-center p-16 h-full">
      <div className="flex gap-16 p-16 flex-col border-solid border-8 border-white bg-color3 justify-center items-center w-full h-full rounded-2xl shadow-xl">
        <img src={urlImg==""?img:urlImg} alt="" className="w-64 h-64 object-cover rounded-full bg-white" />
        <div className="flex flex-row gap-2">
          <input
            className="w-full p-2 text-lg file:hidden text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            id="file_input"
            type="file"
            onChange={(e)=>imgPreview(e)}
          />
          
          <button className="bg-color5 text-white p-2 rounded-lg border-solid border-white border-2 shadow-xl hover:bg-color4 active:bg-slate-500 active:border-slate-200 active:shadow-none focus:bg-color5 focus:border-white focus:shadow-xl disabled:bg-slate-500" disabled={urlImg==""?true:false}><UpLogo/></button>
        </div>
      </div>
    </div>
  );
}

export default EditProfil;

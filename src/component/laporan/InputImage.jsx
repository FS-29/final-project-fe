import { useState } from "react";
import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY;

function InputImage({setLaporanValue,laporanValue}) {
  const [previewImg, setPreviewImg] = useState();
  const [loadingImg, setloadingImg] = useState(false);
  const [idPublicImg, setIdPublicImg] = useState("")
  const handleGetImg = (e) => {
    const fileInput = e.target.files[0];
    const imgInput = URL.createObjectURL(fileInput);
    const formData = new FormData()
    formData.append('image', new Blob([fileInput],{type:fileInput}))
    setPreviewImg(imgInput);
    handleUpImg(formData)

  };
  async function handleUpImg(dataImg) {
    setloadingImg(true);
    const {data} = await axios.post(API_KEY+'upload/laporan',dataImg) 
    if (!data.success) {
        setPreviewImg("");
    }
    else{
        console.log(laporanValue);
        setLaporanValue({
            ...laporanValue,
            foto:data.url
        })
        setIdPublicImg(data.publicId)
    }
    console.log(data);
    setloadingImg(false);
  }
  async function handleDeleteImg() {
    setloadingImg(true);
    const {data} =await axios.delete(API_KEY+'upload/laporan',{
        headers: { "Access-Control-Allow-Origin": true },
        data:{publicId:idPublicImg}
      })
    if(data.success){
        setLaporanValue({
            ...laporanValue,
            foto:""
        })
        setPreviewImg("");
        setIdPublicImg("")
    }
    setloadingImg(false);
  }
//   console.log(previewImg);
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className={`${previewImg?'':'cursor-pointer'} flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg  bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
        >
          {previewImg ? (
            <div >
              {loadingImg ? (
                <div className="w-20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
                    <path
                      fill="none"
                      stroke="#24305E"
                      strokeWidth="18"
                      strokeLinecap="round"
                      strokeDasharray="300 385"
                      strokeDashoffset="0"
                      d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        calcMode="spline"
                        dur="2"
                        values="685;-685"
                        keySplines="0 0 1 1"
                        repeatCount="indefinite"
                      ></animate>
                    </path>
                  </svg>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <img
                    src={previewImg}
                    alt="Preview"
                    className="max-w-xs max-h-64"
                  />
                  <button
                      className="py-1 px-2 rounded-xl border-solid border-white shadow-xl bg-slate-400 text-white font-jakarta font-bold
                    hover:bg-color4 active:bg-slate-500 active:border-slate-200 active:shadow-none focus:bg-color5 focus:border-white focus:shadow-xl disabled:bg-slate-500"
                      onClick={handleDeleteImg}
                    >
                      X
                    </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG or JPG
              </p>
            </div>
          )}

          <input
            onChange={(e) => handleGetImg(e)}
            id="dropzone-file"
            type="file"
            className="hidden"
           disabled={previewImg}/>
        </label>
      </div>
    </>
  );
}

export default InputImage;

import { useNavigate } from "react-router-dom";

function Terkirim({ isSuccess, setLaporanValue, setTerkirim }) {
  const navigate = useNavigate()

  function handleTerkirim() {  
    setLaporanValue(false);
    setTerkirim({
      nama: "",
      noTlp: "",
      prov: "",
      kabKota: "",
      kec: "",
      jenjang: "",
      sekolah: "",
      tglKejadian: "",
      tingkatan: "",
      deskripsi: "",
      foto: "",
    });
    navigate('/')
  }
  return isSuccess ? (
    <div className="fixed inset-0 w-full h-full z-10 backdrop-blur-sm">
      <div className="flex h-full justify-center items-center">
        <div className="w-56 h-56 bg-color3 border-4 border-white border-solid shadow-xl rounded-xl flex flex-col justify-start items-end">
          <button
            className="relative z-20 right-2 top-2 py-1 px-2.5 rounded-md  border-white shadow-xl bg-slate-200 text-slate-600 font-jakarta font-bold
                    hover:bg-color4 hover:text-white active:bg-slate-500 active:border-slate-200 active:shadow-none focus:bg-color5 focus:border-white focus:shadow-xl disabled:bg-slate-500"
            onClick={handleTerkirim}
          >
            X
          </button>
          <div className="relative -top-4 h-full w-full flex gap-2 flex-col justify-center items-center">
            <h1 className="font-jakarta font-bold text-xl text-color5">
              Selamat!!
            </h1>
            <h1 className="font-jakarta font-bold text-xl text-color5">
              Laporan Terkirim
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-color5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Terkirim;

import { useState } from "react";
import Visibility from "../../../assets/svg/Visibility";
import VisibilityOff from "../../../assets/svg/VisibilityOff";
import Datepicker from "react-tailwindcss-datepicker";

function SekolahDash() {
  const styleInput =
    "focus:ring-color8 ring-0 border-2 border-gray-200 focus-within:border-color3 focus:border-color3 active:border-color3";

  const styleLabel = "block font-medium leading-6 text-gray-900";
  const [showPass, setShowPass] = useState(false);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className=" grid grid-cols-1 gap-6 bg-white w-full rounded-lg px-10 py-14">
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="namaSekolah" className={styleLabel}>
          Nama Sekolah
        </label>
        <input
          type="text"
          name="namaSekolah"
          id="namaSekolah"
          autoComplete="namaSekolah"
          className={`block flex-1 rounded-lg ${styleInput}`}
          placeholder="Nama Sekolah"
          // onChange={handleInput}
        />
      </div>
      
      <h1 className="font-bold text-lg text-left">Kontak Sekolah</h1>
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="noSekolah" className={styleLabel}>
          Nomor Telepon Sekolah
        </label>
        <input
          type="number"
          name="noSekolah"
          id="noSekolah"
          autoComplete="noSekolah"
          className={`block flex-1 rounded-lg ${styleInput}`}
          placeholder="Nomor Telepon Sekolah"
          // onChange={handleInput}
        />
      </div>
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="emailSekolah" className={styleLabel}>
          Email Sekolah
        </label>
        <input
          type="email"
          name="emailSekolah"
          id="emailSekolah"
          autoComplete="emailSekolah"
          className={`block flex-1 rounded-lg ${styleInput}`}
          placeholder="Email Sekolah"
          // onChange={handleInput}
        />
      </div>
      <h1 className="font-bold text-lg text-left">Alamat Sekolah</h1>
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="prov">
            Provinsi
        </label>
        <input 
        type="text" 
        name="prov"
        id="prov"
        autoComplete="prov"
        className={`block flex-1 rounded-lg ${styleInput}`}
        placeholder="Provinsi"
        // onChange={handleInput}
        />
      </div>
      <div className="grid grid-cols-1 gap-2">
      <label htmlFor="kabKota" className={styleLabel}>
        Kabupaten/Kota
      </label>
      <input
        type="text"
        name="kabKota"
        id="kabKota"
        autoComplete="kabKota"
        className={`block flex-1 rounded-lg ${styleInput}`}
        placeholder="Kabupaten/Kota"
        // onChange={handleInput}
      />
      </div>
      <div className="grid grid-cols-1 gap-2">
      <label htmlFor="kec" className={styleLabel}>
        Kecamatan
      </label>
      <input
        type="text"
        name="kec"
        id="kec"
        autoComplete="kec"
        className={`block flex-1 rounded-lg ${styleInput}`}
        placeholder="Kecamatan"
        // onChange={handleInput}
      />
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="desa" className={styleLabel}>
          Desa/Kelurahan
        </label>
        <input type="text" 
        name="desa"
        id="desa"
        autoComplete="desa"
        className={`block flex-1 rounded-lg ${styleInput}`}
        placeholder="Desa/Kelurahan"
        // onChange={handleInput}
        />
      </div>
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="kodePos" className={styleLabel}>
          Kode Pos
        </label>
        <input type="number" 
        name="kodePos"
        id="kodePos"
        autoComplete="kodePos"
        className={`block flex-1 rounded-lg ${styleInput}`}
        placeholder="Kode Pos"
        // onChange={handleInput}
        />
      </div>
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="alamat" className={styleLabel}>
          Alamat
        </label>
        <input type="text" 
        name="alamat"
        id="alamat"
        autoComplete="alamat"
        className={`block flex-1 rounded-lg ${styleInput}`}
        placeholder="Alamat"
        // onChange={handleInput}
        />
      </div>
      
      <button
        className="py-2 px-8 w-28 rounded-xl shadow-xl bg-color5 text-white font-jakarta font-bold
                    hover:bg-color4 active:bg-slate-500  active:shadow-none focus:bg-color5  focus:shadow-xl disabled:bg-slate-500"
        // onClick={handlerLogin}
        disabled
      >
        Save
      </button>
</div>
</div>
  );
}

export default SekolahDash;

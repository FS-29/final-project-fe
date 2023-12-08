import { useState } from "react";
import Visibility from "../../assets/svg/Visibility";
import VisibilityOff from "../../assets/svg/VisibilityOff";
import Datepicker from "react-tailwindcss-datepicker";

function DataPribadi() {
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
        <label htmlFor="nama" className={styleLabel}>
          Nama
        </label>
        <input
          type="text"
          name="nama"
          id="nama"
          autoComplete="nama"
          className={`block flex-1 rounded-lg ${styleInput}`}
          placeholder="Nama Pelapor"
          // onChange={handleInput}
        />
      </div>
      <div className={`grid grid-cols-2 gap-2 `}>
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="tmpLahir" className={styleLabel}>
            Tempat Lahir
          </label>
          <input
            type="text"
            name="tmpLahir"
            id="tmpLahir"
            autoComplete="tmpLahir"
            className={`block flex-1  rounded-lg ${styleInput}`}
            placeholder="Tempat Lahir"
            // onChange={handleInput}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="kejadian" className={styleLabel}>
            Tanggal Lahir
          </label>
          <Datepicker
            primaryColor={"blue"}
            useRange={false}
            asSingle={true}
            value={value}
            onChange={handleValueChange}
          />
        </div>
      </div>
      <div className={`grid grid-cols-2 gap-2 `}>
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="Kelamin" className={styleLabel}>
            Kelamin
          </label>
          <select
            id="Kelamin"
            name="Kelamin"
            autoComplete="Kelamin-name"
            className={`block w-full  rounded-lg ${styleInput}`}
            // onChange={handleInput}
          >
            <option>Kelamin</option>
            <option>Laki - laki</option>
            <option>Perempuan</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="Agama" className={styleLabel}>
            Agama
          </label>
          <select
            id="Agama"
            name="Agama"
            autoComplete="Agama-name"
            className={`block w-full  rounded-lg ${styleInput}`}
            // onChange={handleInput}
          >
            <option>Islam</option>
            <option>Kristen</option>
            <option>Katolik</option>
            <option>Hindu</option>
            <option>Budha,</option>
            <option>Konghucu</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="password" className={styleLabel}>
          Password
        </label>
        <div className="flex">
          <input
            id="pass"
            name="pass"
            type={showPass ? "text" : "password"}
            autoComplete="current-password"
            required
            // className={`peer block flex-1 rounded-s-lg border-e-0 outline-none ring-0 focus:ring-color8  border-2 border-gray-300 focus-within:border-color3 focus:border-color3 active:border-color3`}
            className={`peer block flex-1 rounded-s-lg border-e-0 outline-none ring-0 ${styleInput}`}
            // onChange={handleInput}
          />
          <button
            onClick={() => setShowPass(!showPass)}
            className="flex justify-around items-center rounded-e-lg p-2 bg-white text-slate-300 hover:text-slate-500 border-2 border-s-0 border-slate-200 peer-focus:border-color3"
          >
            {showPass ? (
              <Visibility></Visibility>
            ) : (
              <VisibilityOff></VisibilityOff>
            )}
          </button>
        </div>
      </div>
      <h1 className="font-bold text-lg text-left">Kontak Pribadi</h1>
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="email" className={styleLabel}>
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="email"
          className={`block flex-1 rounded-lg ${styleInput}`}
          placeholder="Email Pelapor"
          // onChange={handleInput}
        />
      </div>
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="noTlp" className={styleLabel}>
          No. Telepon
        </label>
        <input
          type="text"
          name="noTlp"
          id="noTlp"
          autoComplete="noTlp"
          className={`block flex-1 rounded-lg ${styleInput}`}
          placeholder="Nama Pelapor"
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
  );
}

export default DataPribadi;

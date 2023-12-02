import Datepicker from "react-tailwindcss-datepicker";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink} from "react-router-dom";
import InputLaporanSendiri from "./InputLaporanSendiri";
import InputImage from "./InputImage";
import Terkirim from "./Terkirim";

const API_KEY = import.meta.env.VITE_API_KEY;
function FormLaporan({}) {
  
  const styleInput =
    "border-none rounded-lg ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-color3";
  const styleLabel = "block font-medium leading-6 text-gray-900";
  const styleCheckBox =
    "rounded-md outline-none text-color3 border-2 border-slate-300 focus:ring-color3";
  const [btnState, setBtnState] = useState(false);
  const [laporanTerkirim, setLaporanTerkirim] = useState(false)
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const [laporanPribadi, setLaporanPribadi] = useState(false);
  const [checkLaporan, setCheckLaporan] = useState(false);
  const [laporan, setLaporan] = useState({
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
  const handleInput = (event) => {
    setLaporan({
      ...laporan,
      [event.target.name]: event.target.value,
    });
  };

  const handleValueChange = (newValue) => {
    setLaporan({
      ...laporan,
      tglKejadian: newValue.startDate,
    });
    setValue(newValue);
  };

  useEffect(() => {
    if (
      laporan.nama != "" &&
      laporan.noTlp != "" &&
      laporan.prov != "" &&
      laporan.kabKota != "" &&
      laporan.kec != "" &&
      laporan.sekolah != "" &&
      laporan.tglKejadian != "" &&
      laporan.tingkatan != ""
    ) {
      if (checkLaporan) {
        setBtnState(true);
      } else {
        setBtnState(false);
      }
    } else {
      setBtnState(false);
    }
  }, [checkLaporan, laporan]);

  async function postingLaporan(e) {
    e.preventDefault();
    setLaporanTerkirim(true)
    const tokenLocal = localStorage.getItem("token");
    await axios.post(API_KEY + "laporan", laporan, {
      headers: {
        "Access-Control-Allow-Origin": true,
        Authorization: "Bearer " + tokenLocal,
      },
    });
    // setLaporanTerkirim(false)
  }
  function setLaporanValue(value) {
    setLaporan(value);
  }
  function setTerkirim(value) {
    setLaporanTerkirim(value)
  }

  console.log(laporan);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 bg-white w-full rounded-lg p-7">
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="nama" className={styleLabel}>
            Nama
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            autoComplete="nama"
            className={`block flex-1 ${styleInput}`}
            placeholder="Nama Pelapor"
            onChange={handleInput}
          />
        </div>
        <div className="grid justify-start ">
          <div className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              name="check-pelapor"
              id="check-pelapor"
              className={styleCheckBox}
              onChange={(e) => setLaporanPribadi(e.target.checked)}
            />
            <label htmlFor="check-pelapor" className={styleLabel}>
              Untuk Diri Sendiri
            </label>
          </div>
        </div>
        <div className={laporanPribadi ? "hidden" : ""}>
          <InputLaporanSendiri
            setLaporanValue={setLaporanValue}
            laporanPribadiValue={laporanPribadi}
            laporanValue={laporan}
          ></InputLaporanSendiri>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <label htmlFor="kejadian" className={styleLabel}>
                Tanggal Kejadian
              </label>
              <Datepicker
                primaryColor={"blue"}
                useRange={false}
                asSingle={true}
                value={value}
                onChange={handleValueChange}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="tingkatan" className={styleLabel}>
                Tingkatan Pembullyan
              </label>
              <select
                id="tingkatan"
                name="tingkatan"
                autoComplete="tingkatan-name"
                className={`block w-full ${styleInput}`}
                onChange={handleInput}
              >
                <option value={""}>Tingkatan</option>
                <option>Ringan</option>
                <option>Sedang</option>
                <option>Berat</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="deskripsi" className={styleLabel}>
            Deskripsi
          </label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            rows={3}
            className={`block w-full ${styleInput}`}
            defaultValue={""}
            onChange={handleInput}
          ></textarea>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="inputImages" className={styleLabel}>
            Bukti
          </label>
          <InputImage setLaporanValue={setLaporanValue} laporanValue={laporan}></InputImage>
        </div>
        <div className="grid justify-start ">
          <div className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              name="check-pernyataan"
              id="check-pernyataan"
              className={styleCheckBox}
              onChange={(e) => setCheckLaporan(e.target.checked)}
            />
            <label htmlFor="check-pernyataan" className={styleLabel}>
              Menyetujui Laporan Perundungan
            </label>
          </div>
        </div>
        <div className="grid justify-end">
          <div className="flex">
            <NavLink to="/">
              <button
                className="py-2 px-4 rounded-xl border-solid border-white border-4 shadow-xl bg-slate-700 text-white font-jakarta font-bold
                    hover:bg-slate-600 active:bg-slate-500 active:border-slate-200 active:shadow-none focus:bg-color5 focus:border-white focus:shadow-xl"
              >
                Batalkan
              </button>
            </NavLink>
            <button
              className="py-2 px-8 rounded-xl border-solid border-white border-4 shadow-xl bg-color5 text-white font-jakarta font-bold
                    hover:bg-color4 active:bg-slate-500 active:border-slate-200 active:shadow-none focus:bg-color5 focus:border-white focus:shadow-xl disabled:bg-slate-500"
              disabled={!btnState}
              onClick={(e) => postingLaporan(e)}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
      <Terkirim isSuccess={laporanTerkirim} setLaporanValue={setLaporanValue} setTerkirim={setTerkirim}></Terkirim>
    </>
  );
}

export default FormLaporan;

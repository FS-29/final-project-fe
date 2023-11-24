import { NavLink } from "react-router-dom";
import PosterLaporan from "../component/laporan/PosterLaporan";
import Datepicker from "react-tailwindcss-datepicker";
import { useEffect, useState } from "react";

function LaporanPage() {
  const styleInput =
    "border-none rounded-lg ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-color3";
  const styleLabel = "block font-medium leading-6 text-gray-900";
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const [laporanPribadi, setLaporanPribadi] = useState(false);
  const [checkLaporan, setCheckLaporan] = useState(false);
  const [btnState, setBtnState] = useState(false);
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
    if (laporanPribadi) {
      setLaporan({
        ...laporan,
        noTlp: "82245678290",
        prov: "test effect",
        kabKota: "test effect",
        kec: "test effect",
        jenjang: "test effect",
        sekolah: "test effect",
      });
    } else {
      setLaporan({
        ...laporan,
        noTlp: "",
        prov: "",
        kabKota: "",
        kec: "",
        jenjang: "",
        sekolah: "",
      });
    }
  }, [laporanPribadi, checkLaporan]);

  useEffect(() => {
    if (laporan.nama != "" && laporan.noTlp != "") {
      if (checkLaporan) {
        setBtnState(true);
        
      } else {
        setBtnState(false);
        
      }
    } else {
      setBtnState(false);
      
    }
  }, [checkLaporan, laporan]);

  // console.log(laporan);
  return (
    <div className="flex flex-col font-jakarta">
      <div className="flex flex-col items-center gap-5 pt-28 px-5">
        <h1 className="text-center font-bold text-4xl max-w-6xl">
          Satu tindakan kebaikan bisa mengubah hidup seseorang Mari bersama-sama
          hentikan perundungan dengan tindakan kebaikan
        </h1>
        <h3 className="text-center font-medium text-2xl">
          Selamat datang di layanan laporan anti-perudungan
        </h3>
      </div>
      <PosterLaporan></PosterLaporan>
      <div className="flex flex-col items-center px-6 pb-12">
        <div className="w-fit p-4 rounded-t-3xl bg-color3">
          <h2 className="text-center font-bold text-3xl">
            Buat Laporan Perundungan
          </h2>
        </div>
        <div className="flex w-full p-3 rounded-2xl bg-color3">
          <form className="w-full">
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
                    className=""
                    onChange={(e) => setLaporanPribadi(e.target.checked)}
                  />
                  <label htmlFor="check-pelapor" className={styleLabel}>
                    Untuk Diri Sendiri
                  </label>
                </div>
              </div>
              <div
                className={`grid grid-cols-1 gap-2 ${
                  laporanPribadi ? "hidden" : ""
                }`}
              >
                <label htmlFor="no-tlp" className={styleLabel}>
                  No.Telepon
                </label>
                <div className={`flex ${styleInput}`}>
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    +62
                  </span>
                  <input
                    type="text"
                    name="noTlp"
                    id="noTlp"
                    autoComplete="noTlp"
                    value={laporan.noTlp}
                    className="block outline-none border-0 flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div
                className={`grid grid-cols-1 gap-2 ${
                  laporanPribadi ? "hidden" : ""
                }`}
              >
                <label htmlFor="Alamat" className={styleLabel}>
                  Alamat Sekolah
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="grid">
                    <select
                      id="prov"
                      name="prov"
                      autoComplete="prov-name"
                      className={`block w-full ${styleInput}`}
                      onChange={handleInput}
                    >
                      <option>Provinsi</option>
                      <option>test</option>
                    </select>
                  </div>
                  <div className="grid">
                    <select
                      id="kabKota"
                      name="kabKota"
                      autoComplete="kabKota-name"
                      className={`block w-full ${styleInput}`}
                      onChange={handleInput}
                    >
                      <option>Kabupaten/Kota</option>
                      <option>test</option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                className={`grid grid-cols-2 gap-2 ${
                  laporanPribadi ? "hidden" : ""
                }`}
              >
                <div className="grid">
                  <select
                    id="kec"
                    name="kec"
                    autoComplete="kec-name"
                    className={`block w-full ${styleInput}`}
                    onChange={handleInput}
                  >
                    <option>Kecamatan</option>
                    <option>test</option>
                  </select>
                </div>
              </div>
              <div
                className={`grid grid-cols-2 gap-2 ${
                  laporanPribadi ? "hidden" : ""
                }`}
              >
                <div className="grid">
                  <select
                    id="jenjang"
                    name="jenjang"
                    autoComplete="jenjang-name"
                    className={`block w-full ${styleInput}`}
                    onChange={handleInput}
                  >
                    <option>Jenjang Sekolah</option>
                    <option>SD</option>
                    <option>SMP</option>
                    <option>SMA</option>
                    <option>SMK</option>
                  </select>
                </div>
                <div className="grid">
                  <select
                    id="sekolah"
                    name="sekolah"
                    autoComplete="sekolah-name"
                    className={`block w-full ${styleInput}`}
                    onChange={handleInput}
                  >
                    <option>Nama Sekolah</option>
                    <option>test</option>
                  </select>
                </div>
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
                      <option>Ringan</option>
                      <option>Berat</option>
                      <option>Sedang</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <label htmlFor="deskripsi" className={styleLabel}>
                  Deskripsi
                </label>
                <textarea
                  id="Deskripsi"
                  name="Deskripsi"
                  rows={3}
                  className={`block w-full ${styleInput}`}
                  defaultValue={""}
                  onChange={handleInput}
                ></textarea>
              </div>
              <div className="grid justify-start ">
                <div className="flex flex-row items-center gap-2">
                  <input
                    type="checkbox"
                    name="check-pernyataan"
                    id="check-pernyataan"
                    className=""
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
                  >
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LaporanPage;

import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_WILAYAH_URL = import.meta.env.VITE_API_WILAYAH_KEY;
const API_SEKOLAH_URL = import.meta.env.VITE_API_SEKOLAH_KEY;

const provIdToSekolah = [
  { id: "11", idSekolah: "060000" }, //aceh
  { id: "12", idSekolah: "070000" }, //sumut
  { id: "13", idSekolah: "080000" }, //sumbar
  { id: "14", idSekolah: "090000" }, //riau
  { id: "15", idSekolah: "100000" }, //jambi
  { id: "16", idSekolah: "110000" }, //sumsel
  { id: "17", idSekolah: "260000" }, //bengkulu
  { id: "18", idSekolah: "120000" }, //lampung
  { id: "19", idSekolah: "290000" }, //kep bangka belitung
  { id: "21", idSekolah: "310000" }, //kep riau
  { id: "31", idSekolah: "010000" }, //dkijakarta
  { id: "32", idSekolah: "020000" }, //jawa barat
  { id: "33", idSekolah: "030000" }, //jawa tengah
  { id: "34", idSekolah: "040000" }, //di yogyakarta
  { id: "35", idSekolah: "050000" }, //jawatimur
  { id: "36", idSekolah: "280000" }, //banten
  { id: "51", idSekolah: "220000" }, //bali
  { id: "52", idSekolah: "230000" }, //NTB
  { id: "53", idSekolah: "240000" }, //NTT
  { id: "61", idSekolah: "130000" }, //kalbar
  { id: "62", idSekolah: "140000" }, //kalteng
  { id: "63", idSekolah: "150000" }, //kalsel
  { id: "64", idSekolah: "160000" }, //kaltim
  { id: "65", idSekolah: "340000" }, //kalut
  { id: "71", idSekolah: "170000" }, //sulut
  { id: "72", idSekolah: "180000" }, //sulteng
  { id: "73", idSekolah: "190000" }, //sulsel
  { id: "74", idSekolah: "200000" }, //sultenggara
  { id: "75", idSekolah: "300000" }, //gorontalo
  { id: "76", idSekolah: "330000" }, //sulbar
  { id: "81", idSekolah: "210000" }, //maluku
  { id: "82", idSekolah: "270000" }, //maluku utara
  { id: "91", idSekolah: "320000" }, //papua barat
  { id: "94", idSekolah: "250000" }, //papua
];

function InputLaporanSendiri({
  setLaporanValue,
  laporanPribadiValue,
  laporanValue,
}) {
  const styleInput =
    "border-none rounded-lg ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-color3";
  const styleLabel = "block font-medium leading-6 text-gray-900";
  const [provinsi, setProvinsi] = useState([]);
  const [provId, setProvId] = useState([]);
  const [kabId, setKabId] = useState();
  const [kabupaten, setKabupaten] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [sekolah, setSekolah] = useState([]);
  const [noTeleponData, setTeleponData] = useState("");
  const [sekolahData, setSekolahData] = useState({});
  useEffect(() => {
    if (laporanPribadiValue) {
      setLaporanValue({
        ...laporanValue,
        noTlp: noTeleponData,
        prov: sekolahData.prov,
        kabKota: sekolahData.kab_kota,
        kec: sekolahData.kec,
        sekolah: sekolahData.nama,
      });
    } else {
      setLaporanValue({
        ...laporanValue,
        noTlp: "",
        prov: "",
        kabKota: "",
        kec: "",
        jenjang: "",
        sekolah: "",
      });
    }
  }, [laporanPribadiValue]);
  const handleInput = (event) => {
    setLaporanValue({
      ...laporanValue,
      [event.target.name]: event.target.value,
    });
  };
  const handleInputOptions = (e) => {
    if (e.target.name == "prov") {
      const id = e.target.value;
      const idSekolah = provIdToSekolah.find((data) => data.id == id).idSekolah;
      setLaporanValue({
        ...laporanValue,
        prov: e.target[e.target.selectedIndex].innerText,
        kabKota: "",
        kec: "",
      });
      setProvId([id, idSekolah]);
    } else if (e.target.name == "kabKota") {
      setKabId(e.target.value);
      setLaporanValue({
        ...laporanValue,
        kabKota: e.target[e.target.selectedIndex].innerText,
        kec: "",
      });
    } else {
      setLaporanValue({
        ...laporanValue,
        [e.target.name]: e.target[e.target.selectedIndex].innerText,
      });
    }
  };
  useEffect(() => {
    getProv();
  }, []);

  useEffect(() => {
    getKab(provId[0]);
  }, [provId]);

  useEffect(() => {
    getKec(kabId);
  }, [kabId]);

  useEffect(() => {
    getSekolah(provId[1], laporanValue.jenjang);
  }, [provId, laporanValue.jenjang]);

  useEffect(() => {
    getDataLaporan();
    getDataSekolah();
  }, []);
  async function getProv() {
    const { data } = await axios(API_WILAYAH_URL + "provinces.json");
    setProvinsi(data);
  }
  async function getKab(id) {
    if (id != null) {
      const { data } = await axios(
        API_WILAYAH_URL + "regencies/" + id + ".json"
      );
      setKabupaten(data);
    }
  }
  async function getKec(id) {
    if (id != null) {
      const { data } = await axios(
        API_WILAYAH_URL + "districts/" + id + ".json"
      );
      setKecamatan(data);
    }
  }
  async function getSekolah(id, selJenjang) {
    if (id != null && selJenjang != "") {
      const { data } = await axios(
        API_SEKOLAH_URL +
          selJenjang +
          "?provinsi=" +
          id +
          "&page=1&perPage=5000"
      );
      setSekolah(data.dataSekolah);
    }
  }
  async function getDataLaporan() {
    const tokenLocal = localStorage.getItem("token");
    const { data } = await axios(API_KEY + "profil", {
      headers: {
        "Access-Control-Allow-Origin": true,
        Authorization: "Bearer " + tokenLocal,
      },
    });
    setTeleponData(data.data.no_tlp);
  }

  async function getDataSekolah() {
    const tokenLocal = localStorage.getItem("token");
    const { data } = await axios(API_KEY + "pelapor/sekolah", {
      headers: {
        "Access-Control-Allow-Origin": true,
        Authorization: "Bearer " + tokenLocal,
      },
    });
    setSekolahData(data.data);
  }
  //   console.log(laporan);
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className={`grid grid-cols-1 gap-2`}>
        <label htmlFor="no-tlp" className={styleLabel}>
          No.Telepon
        </label>
        <div className={`flex ${styleInput}`}>
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
            +62
          </span>
          <input
            type="number"
            name="noTlp"
            id="noTlp"
            autoComplete="noTlp"
            value={laporanValue.noTlp}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block outline-none border-0 flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
            onChange={handleInput}
          />
        </div>
      </div>
      <div className={`grid grid-cols-1 gap-2`}>
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
              onChange={handleInputOptions}
            >
              <option>Provinsi</option>
              {provinsi.map((prov, i) => (
                <option key={i} value={prov.id}>
                  {prov.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid">
            <select
              id="kabKota"
              name="kabKota"
              autoComplete="kabKota-name"
              className={`block w-full ${styleInput}`}
              onChange={handleInputOptions}
            >
              <option>Kabupaten/Kota</option>
              {kabupaten.map((kab, i) => (
                <option key={i} value={kab.id}>
                  {kab.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-2 gap-2 `}>
        <div className="grid">
          <select
            id="kec"
            name="kec"
            autoComplete="kec-name"
            className={`block w-full ${styleInput}`}
            onChange={handleInputOptions}
          >
            <option>Kecamatan</option>
            {kecamatan.map((kec, i) => (
              <option key={i} value={kec.id}>
                {kec.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={`grid grid-cols-2 gap-2 `}>
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
            {sekolah.map((sekolah, i) => (
              <option key={i} value={sekolah.npsn}>
                {sekolah.sekolah}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputLaporanSendiri;

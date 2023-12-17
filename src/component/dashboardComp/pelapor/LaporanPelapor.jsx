import LaporanPelaporComp from "./LaporanPelaporComp";

function LaporanPelapor() {
  return (
    <div className="flex flex-col gap-6 justify-center items-start p-6 font-jakarta">
      <div className="border-solid border-2 border-gray-300 rounded-xl w-full">
        <h1 className="p-2">Riwayat Laporan</h1>
        <div className="grid grid-cols-5 bg-color9 p-2 border-solid border-t-2 border-gray-300">
          <div className="grid col-span-1">
            <h2>Tanggal Lapor</h2>
          </div>
          <div className="grid col-span-1">
            <h2>Status</h2>
          </div>
          <div className="grid col-span-3">
            <h2>Deskripsi</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <LaporanPelaporComp
            tgl={"2023-09-01"}
            statusLap={1}
            deskripsi={
              "Saya menerima pesan teks yang menghina di ponsel saya. Pesan tersebut berisi kata-kata kasar dan mengancam."
            }
          ></LaporanPelaporComp>
          <LaporanPelaporComp
            tgl={"2023-09-01"}
            statusLap={2}
            deskripsi={
              "Saya menerima pesan teks yang menghina di ponsel saya. Pesan tersebut berisi kata-kata kasar dan mengancam."
            }
          ></LaporanPelaporComp>
          <LaporanPelaporComp
            tgl={"2023-09-01"}
            statusLap={3}
            deskripsi={
              "Saya menerima pesan teks yang menghina di ponsel saya. Pesan tersebut berisi kata-kata kasar dan mengancam."
            }
          ></LaporanPelaporComp>
          <LaporanPelaporComp
            tgl={"2023-09-01"}
            statusLap={4}
            deskripsi={
              "Saya menerima pesan teks yang menghina di ponsel saya. Pesan tersebut berisi kata-kata kasar dan mengancam."
            }
          ></LaporanPelaporComp>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-4">
        <h1>Keterangan Status :</h1>
        <div className="flex flex-row">
          <div className="flex flex-row items-center gap-2 py-0.5 px-2 rounded-xl bg-color6 w-28 shadow-xl">
            <div className={`bg-green-500 w-3 h-3 rounded-full`}></div>
            <h2>Selesai</h2>
          </div>
          <h2 className="ps-4">= Laporan Telah Selesai ditangani</h2>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row items-center gap-2 py-0.5 px-2 rounded-xl bg-color6 w-28 shadow-xl">
            <div className={`bg-red-500 w-3 h-3 rounded-full`}></div>
            <h2>Diproses</h2>
          </div>
          <h2 className="ps-4">= Diproses Oleh Konselor</h2>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row items-center gap-2 py-0.5 px-2 rounded-xl bg-color6 w-28 shadow-xl">
            <div className={`bg-yellow-500 w-3 h-3 rounded-full`}></div>
            <h2>Diproses</h2>
          </div>
          <h2 className="ps-4">= Diproses Oleh Admin</h2>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row items-center gap-2 py-0.5 px-2 rounded-xl bg-color6 w-28 shadow-xl">
            <div className={`bg-blue-500 w-3 h-3 rounded-full`}></div>
            <h2>Antrian</h2>
          </div>
          <h2 className="ps-4">= Dalam Proses Antrian Laporan</h2>
        </div>
      </div>
    </div>
  );
}

export default LaporanPelapor;

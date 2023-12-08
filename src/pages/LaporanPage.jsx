import FormLaporan from "../component/laporan/FormLaporan";
import PosterLaporan from "../component/laporan/PosterLaporan";

function LaporanPage() {
  return (
    <>
      <div className="flex flex-col font-jakarta">
        <div className="flex flex-col items-center gap-5 pt-28 px-5">
          <h1 className="text-center font-bold text-4xl max-w-6xl">
            Satu tindakan kebaikan bisa mengubah hidup seseorang Mari
            bersama-sama hentikan perundungan dengan tindakan kebaikan
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
            <div className="w-full">
              <FormLaporan></FormLaporan>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LaporanPage;

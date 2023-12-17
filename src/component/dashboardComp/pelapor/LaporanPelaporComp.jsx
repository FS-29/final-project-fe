function LaporanPelaporComp({ tgl, statusLap, deskripsi }) {
  return (
    <div className="grid grid-cols-5 p-2 border-solid border-t-2 border-gray-300">
      <div className="grid col-span-1">
        <h2>{tgl}</h2>
      </div>
      <div className="grid col-span-1 items-start pe-5">
        <div className="flex flex-row items-center gap-2 py-0.5 px-2 rounded-xl bg-color6 w-28 shadow-xl">
          <div
            className={`${
              statusLap == 1
                ? "bg-green-500"
                : statusLap == 2
                ? "bg-red-500"
                : statusLap == 3
                ? "bg-yellow-500"
                : statusLap == 4
                ? "bg-blue-500"
                : ""
            } w-3 h-3 rounded-full`}
          ></div>
          <h2>
            {statusLap == 1
              ? "Selesai"
              : statusLap == 2
              ? "Diproses"
              : statusLap == 3
              ? "Diproses"
              : statusLap == 4
              ? "Antrian"
              : ""}
          </h2>
        </div>
      </div>
      <div className="grid col-span-3">
        <p>{deskripsi}</p>
      </div>
    </div>
  );
}

export default LaporanPelaporComp;

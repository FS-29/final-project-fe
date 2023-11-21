function HeroSection() {
  return (
    <div className="flex justify-center py-32">
      <div className="flex flex-col gap-9 w-640 items-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-jakarta font-bold text-5xl leading-normal text-center ">
            Ciptakan Lingkungan Aman untuk Semua Generasi
          </h1>
          <h6 className="font-jakarta font-normal text-2xl text-center text-gray-400">
            Selamat Datang di layanan Bimbingan Konseling{" "}
          </h6>
        </div>
        <button
          className="py-2 px-4 rounded-2xl border-solid border-white border-4 shadow-xl bg-color5 text-xl text-white font-jakarta font-bold
                    hover:bg-color4 active:bg-slate-500 active:border-slate-200 active:shadow-none focus:bg-color5 focus:border-white focus:shadow-xl"
        >
          Kirim Aduan
        </button>
      </div>
    </div>
  );
}

export default HeroSection;

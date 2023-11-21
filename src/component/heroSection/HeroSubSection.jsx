function HeroSubSection() {
  return (
    <div className="z-0 flex justify-center relative -top-32 px-24">
      <div className="flex flex-col gap-12 max-w-6xl items-center">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="font-jakarta font-bold text-4xl leading-normal text-center ">
            Apa Itu Perudungan ?
          </h1>
          <p className="font-jakarta font-normal text-xl text-center">
            Perundungan (bullying) adalah perilaku agresif, merendahkan, atau
            mengintimidasi yang dilakukan secara berulang-ulang terhadap satu
            atau beberapa individu oleh orang lain atau sekelompok orang yang
            lebih kuat atau berkuasa. Perundungan dapat terjadi dalam berbagai
            konteks, termasuk di sekolah, tempat kerja, di lingkungan sosial,
            atau bahkan secara daring (cyberbullying). Perilaku perundungan
            seringkali bertujuan untuk menyakiti, menghina, atau mendominasi
            targetnya, dan dapat memiliki efek psikologis dan emosional yang
            serius pada korban.
          </p>
        </div>
        <button
          className="py-2 px-4 rounded-2xl border-solid border-white border-4 shadow-xl bg-color5 text-xl text-white font-jakarta font-bold
                    hover:bg-color4 active:bg-slate-500 active:border-slate-200 active:shadow-none focus:bg-color5 focus:border-white focus:shadow-xl"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
}

export default HeroSubSection;

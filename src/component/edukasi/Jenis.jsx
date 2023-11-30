function Jenis({ title, para, list }) {
  return (
    <article>
      <h1 className={title}>Kategori Bullying</h1>
      <br />
      <p className={para}>
        &emsp; &emsp;Kejahatan perundungan, yang juga dikenal sebagai bullying,
        tetap menjadi masalah yang belum dapat dihilangkan sepenuhnya hingga
        saat ini. Ini disebabkan oleh kenyataan bahwa perundungan dapat terjadi
        di berbagai tempat, termasuk di sekolah, dalam sesi belajar, dan bahkan
        di lingkungan rumah.
      </p>
      <br />
      <p className={para}>
        &emsp; &emsp;Dalam banyak situasi, para korban perundungan merasa takut
        untuk mengungkapkan kondisi yang mereka alami karena mendapatkan ancaman
        dari pelaku. berikut ini adalah 6 kategori bullying :
      </p>
      <br />
      <ol className="list-decimal ps-7">
        <li className={list}>Kontak fisik langsung.</li>
        <p className={para}>
          Tindakan memukul, mendorong, menggigit, menjambak, menendang, mengunci
          seseorang dalam ruangan, mencubit, mencakar, juga termasuk memeras dan
          merusak barang yang dimiliki orang lain.
        </p>
        <br />
        <li className={list}>Kontak verbal langsung.</li>
        <p className={para}>
          Tindakan mengancam, mempermalukan, merendahkan, mengganggu, memberi
          panggilan nama (name-calling), sarkasme, merendahkan (put- downs),
          mencela/mengejek, mengintimidasi, memaki, menyebarkan gosip.
        </p>
        <br />
        <li className={list}>Perilaku non-verbal langsung.</li>
        <p className={para}>
          Tindakan melihat dengan sinis, menjulurkan lidah, menampilkan ekspresi
          muka yang merendahkan, mengejek, atau mengancam; biasanya disertai
          oleh bullying fisik atau verbal.
        </p>
        <br />
        <li className={list}>Perilaku non-verbal tidak langsung.</li>
        <p className={para}>
          Tindakan mendiamkan seseorang, memanipulasi persahabatan sehingga
          menjadi retak, sengaja mengucilkan atau mengabaikan, mengirimkan surat
          kaleng.
        </p>
        <br />
        <li className={list}>Cyber Bullying</li>
        <p className={para}>
          Tindakan menyakiti orang lain dengan sarana media elektronik (rekaman
          video intimidasi, pencemaran nama baik lewat media social)
        </p>
        <br />
        <li className={list}>Pelecehan seksual.</li>
        <p className={para}>
          Kadang tindakan pelecehan dikategorikan perilaku agresi fisik atau
          verbal.
        </p>
        <br />
      </ol>
    </article>
  );
}
export default Jenis;

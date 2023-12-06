function Pencegahan({ title, para, list }) {
  return (
    <article>
      <h1 className={title}>Bagaimana Cara Mencegah Bullying?</h1>
      <br />
      <p className={para}>
        &emsp; Bicarakan dengan anak seputar apa yang mereka anggap sebagai
        perilaku baik dan buruk di sekolah, di lingkungan sekitar maupun di
        media sosial. Pastikan orang tua memiliki komunikasi terbuka dengan anak
        supaya mereka merasa nyaman memberi tahu apa pun yang terjadi dalam
        hidupnya.
      </p>
      <br />
      <p className={para}>
        &emsp; Lakukan pencegahan bullying secara menyeluruh dan terpadu.
        Langkah preventif ini bisa mulai dari anak, keluarga, sekolah maupun
        masyarakat.
      </p>
      <br />
      <ol className="list-decimal ps-7">
        <li className={list}>Pencegahan melalui anak</li>
        <p className={para}>
          Ajari anak agar mampu mendeteksi potensi terjadinya bullying sedini
          mungkin. Dorong mereka agar bisa melawan tindakan perundungan yang
          menimpanya.
        </p>
        <p className={para}>
          Berikut cara yang bisa ibu lakukan untuk mencegah bullying dalam
          keluarga:
        </p>
        <ul className="list-disc ps-7">
          <li className={para}>Hindari kelompok yang suka merundung.</li>
          <li className={para}>
            Ajarkan anak untuk memilih kelompok bermain yang tepat.
          </li>
          <li className={para}>
            Kenalkan anak pada orang dewasa yang bisa membantu mereka saat
            mengalami perundungan. Misalnya, guru atau pendamping pada lokasi
            tertentu.
          </li>
          <li className={para}>
            Ajarkan anak untuk mengolah emosi saat mengalami perundungan.
          </li>
          <li className={para}>
            Minta anak untuk selalu terbuka dan bercerita mengenai segala bentuk
            perundungan yang terjadi.
          </li>
        </ul>
        <br />
        <li className={list}>Pencegahan dari keluarga</li>
        <p className={para}>
          Keluarga bisa melakukan beberapa pencegahan untuk menghindari anak
          dari perundungan, seperti:
        </p>
        <ul className="list-disc ps-7">
          <li className={para}>
            Perkuat pola asuh yang mengajarkan cinta kasih kepada sesama dan
            menanamkan nilai-nilai keagamaan.
          </li>
          <li className={para}>
            Bentuk lingkungan yang penuh kasih sayang dan aman.
          </li>
          <li className={para}>Bangun rasa percaya diri anak.</li>
          <li className={para}>Pupuk rasa keberaniannya.</li>
          <li className={para}>Tanamkan ketegasan dalam dirinya.</li>
          <li className={para}>
            Ajarkan etika dan gugah rasa empatinya supaya anak bisa menghargai
            dan peduli terhadap sesama.
          </li>
          <li className={para}>
            Jangan ragu untuk memberikan teguran saat ia melakukan kesalahan.
          </li>
          <li className={para}>
            Selalu dampingi anak dalam menyerap informasi dari televisi,
            internet dan media elektronik lainnya.
          </li>
        </ul>
        <br />
        <li className={list}>Pencegahan di sekolah</li>
        <p className={para}>
          Berikut tindakan preventif bullying yang bisa dilakukan sekolah:
        </p>
        <ul className="list-disc ps-7">
          <li className={para}>
            Membuat sistem pencegahan berupa pesan kepada murid bahwa sekolah
            tidak menerima perilaku bully di sekolah dan membuat kebijakan “anti
            bullying”.
          </li>
          <li className={para}>
            Bangun komunikasi efektif antara guru dan murid.
          </li>
          <li className={para}>
            Rutin membuka ruang diskusi dan ceramah mengenai perilaku bully di
            sekolah.
          </li>
          <li className={para}>
            Ciptakan suasana lingkungan sekolah yang aman, nyaman dan kondusif.
          </li>
          <li className={para}>
            Menyediakan bantuan kepada murid yang menjadi korban bully.
          </li>
          <li className={para}>
            Melakukan pertemuan berkala dengan orangtua atau komite sekolah
          </li>
        </ul>
        <br />
        <li className={list}>Pencegahan di masyarakat</li>
        <p className={para}>
          Salah satu contohnya dengan membangun kelompok masyarakat yang peduli
          terhadap perlindungan anak, mulai dari tingkat desa atau kampung.
        </p>
        <p className={para}>
          Dalam masyarakat ada beberapa hal yang bisa berguna sebagai
          pencegahan, seperti:.
        </p>
        <ul className="list-disc ps-7">
          <li className={para}>
            Ajarkan kelompok muda untuk melakukan berbagai kegiatan sosial.
          </li>
          <li className={para}>
            Membangun kelompok masyarakat yang peduli terhadap perlindungan
            anak. Caranya bisa dimulai dari tingkat desa/kampung (Perlindungan
            Anak Terintegrasi Berbasis MAsyarakat : PATBM).
          </li>
        </ul>
      </ol>
    </article>
  );
}
export default Pencegahan;

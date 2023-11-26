function Dampak({ title, para, list }) {
  return (
    <article>
      <h1 className={title}>Dampak Bullying</h1>
      <br />
      <p className={para}>
        &emsp; Dampak bullying dapat mengancam setiap pihak yang terlibat, baik
        anak- anak yang di-bully, anak-anak yang mem-bully, anak-anak yang
        menyaksikan bullying, bahkan sekolah dengan isu bullying secara
        keseluruhan. Bullying dapat membawa pengaruh buruk terhadap kesehatan
        fisik maupun mental anak. Pada kasus yang berat, bullying dapat menjadi
        pemicu tindakan yang fatal, seperti bunuh diri dan sebagainya. Dampak
        dari bullying adalah:
      </p>
      <ol className="list-decimal ps-7">
        <li className={list}>Dampak bagi korban</li>
        <ul className="list-disc ps-7">
          <li className={para}>Depresi dan marah </li>
          <li className={para}>
            rendahnya tingkat kehadiran dan rendahnya prestasi akademik siswa
          </li>
          <li className={para}>
            Menurunnya skor tes kecerdasan (IQ) dan kemampuan analisis siswa.
          </li>
        </ul>
        <li className={list}>Dampak bagi pelaku</li>
        <p className={para}>
          &emsp; Pelaku memiliki rasa percaya diri yang tinggi dengan harga diri
          yang tinggi pula, cenderung bersifat agresif dengan perilaku yang pro
          terhadap kekerasan, tipikal orang berwatak keras, mudah marah dan
          impulsif, toleransi yang rendah terhadap frustasi. Memiliki kebutuhan
          kuat untuk mendominasi orang lain dan kurang berempati terhadap
          targetnya. Dengan melakukan bullying, pelaku akan beranggapan bahwa
          mereka memiliki kekuasaan terhadap keadaan. Jika dibiarkan terus
          menerus tanpa intervensi, perilaku bullying ini dapat 3 menyebabkan
          terbentuknya perilaku lain berupa kekerasan terhadap anak dan perilaku
          kriminal lainnya.
        </p>
        <li className={list}>
          Dampak bagi siswa lain yang menyaksikan bullying (bystanders)
        </li>
        <p className={para}>
          &emsp; Jika bullying dibiarkan tanpa tindak lanjut, maka para siswa
          lain yang menjadi penonton dapat berasumsi bahwa bullying adalah
          perilaku yang diterima secara sosial. Dalam kondisi ini, beberapa
          siswa mungkin akan bergabung dengan penindas karena takut menjadi
          sasaran berikutnya dan beberapa lainnya mungkin hanya akan diamsaja
          tanpa melakukan apapun dan yang paling parah mereka merasa tidak perlu
          menghentikannya.
        </p>
      </ol>
    </article>
  );
}
export default Dampak;

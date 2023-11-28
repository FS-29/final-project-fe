import frame1 from "../../assets/img/frame1.png"
import frame2 from "../../assets/img/frame2.png"
import frame3 from "../../assets/img/frame3.png"
import frame4 from "../../assets/img/frame4.png"
import Poster2Comp from "./Poster2Comp";
function Poster2() {
  return (
    <div className="flex  flex-col items-center py-32 bg-color6 overflow-hidden">
      <div className="flex z-20 gap-44 max-xl:gap-10 flex-row">
        <Poster2Comp 
            img={frame1} 
            title={'Pilih Bimbingan Konselor'} 
            desc={'Pembing Konselor pilih dengan yang diinginkan.'}
        ></Poster2Comp>
        <Poster2Comp 
            img={frame2} 
            title={'Proses Bimbingan Konselor'} 
            desc={'Setelah memilih konselor akan memasuki forum chat  bersama konselor.'}
        ></Poster2Comp>
        <Poster2Comp 
            img={frame3} 
            title={'Bimbingan Selesai'} 
            desc={'Pengajuan bimbingan konselor perudungan akan ditindak lanjuti oleh pembimbing konselor.'}
        ></Poster2Comp>
      </div>
      <img className="z-10 relative w-860 max-lg:w-640 h-1.5 -top-48" src={frame4} alt="" />
    </div>
  );
}

export default Poster2;
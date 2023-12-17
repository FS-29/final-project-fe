import Inbox from "./PesanComp/Inbox";
import img from "../../assets/svg/profilPolos.svg";
import SendIcon from "../../assets/svg/SendIcon.";
import SendComp from "./PesanComp/SendComp";
import ReceiveComp from "./PesanComp/ReceiveComp";

function PesanDash() {
  const nama = "Jono";
  const role = "Admin";

  return (
    <div className="p-6 h-screen">
      <div className="flex flex-row border-4 h-full rounded-xl">
        <div className="flex flex-col w-1/4 h-full gap-2 ps-2 border-e-4">
          <Inbox name={nama} isClick={true}></Inbox>
          {/* <Inbox name={"agus"}></Inbox> */}
        </div>
        <div className="w-3/4 flex flex-col">
          <div className="flex flex-row h-1/6 items-center gap-3 bg-color3 w-full p-2">
            <img className="w-20 bg-white rounded-full" src={img} alt="" />
            <div className="flex flex-col gap-1">
              <h1 className="font-extrabold text-xl">{nama}</h1>
              <h2 className="text-sm">{role}</h2>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 px-2 py-4 justify-end overflow-y-auto">
            {/* <SendComp text={'halo apa kabar kalian semua vwibaoi bveibwi ebvi ieviwej i wev ewb vi'}></SendComp> */}
            <ReceiveComp text={'halo apa kabar, mohon tunggu sebentar laporan kamu akan diproses oleh admin sebentar lagi'}></ReceiveComp>
          </div>
          <div className=" bg-color6 p-2 flex flex-row gap-2">
            <input
              type="text"
              name="noTlp"
              id="noTlp"
              autoComplete="noTlp"
              className={`block flex-1 rounded-2xl focus:ring-color8 ring-0 border-2 border-gray-200 focus-within:border-color3 focus:border-color3 active:border-color3`}
              placeholder="Nama Pelapor"
              // onChange={handleInput}
            />
            <button
            className="py-1 px-2.5 rounded-full shadow-xl bg-color5 text-white font-jakarta font-bold
                    hover:bg-color4 active:bg-slate-500  active:shadow-none focus:bg-color5  focus:shadow-xl disabled:bg-slate-500"
            // onClick={handlerLogin}
          >
            <SendIcon/>
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default PesanDash;

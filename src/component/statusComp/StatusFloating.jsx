// import { useNavigate } from "react-router-dom";
import {useDispatch , useSelector} from "react-redux";
import { setStatusLogin } from "../../redux/reducers/auth-reducers";

function StatusFloating() {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const {statusLogin} = useSelector((state)=> state.authUser)

  function handleTerkirim() {
    dispatch(setStatusLogin(0))
  }
  return (
    <div className="fixed inset-0 w-full h-full z-10 backdrop-blur-sm">
      <div className="flex h-full justify-center items-center">
        <div className="w-56 h-56 bg-color3 border-4 border-white border-solid shadow-xl rounded-xl flex flex-col justify-start items-end">
          <button
            className="relative z-20 right-2 top-2 py-1 px-2.5 rounded-md  border-white shadow-xl bg-slate-200 text-slate-600 font-jakarta font-bold
                    hover:bg-color4 hover:text-white active:bg-slate-500 active:border-slate-200 active:shadow-none focus:bg-color5 focus:border-white focus:shadow-xl disabled:bg-slate-500"
            onClick={handleTerkirim}
          >
            X
          </button>
          <div className="relative -top-4 px-4 h-full w-full flex gap-2 flex-col justify-center items-center">
            <h1 className="font-jakarta font-extrabold text-xl text-color5 text-center">
              {statusLogin==1?"Password Salah":statusLogin==2?"Username Belum Terdaftar":statusLogin==3?"Network Error":""}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatusFloating;

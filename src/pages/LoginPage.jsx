import {useDispatch , useSelector} from "react-redux";
import poster from "../assets/svg/authPoster.svg";
import { useEffect, useState } from "react";
import ArrowLeft from "../assets/svg/ArrowLeft";
import Visibility from "../assets/svg/Visibility";
import VisibilityOff from "../assets/svg/VisibilityOff";
import { login } from "../redux/reducers/auth-reducers";


function LoginPage() {
  // const {isLogin} = useSelector((state)=> state.authUser)
  const dispatch = useDispatch()
  const styleInput = "focus:ring-color8 ring-0 border-2 border-gray-300 focus-within:border-color3 focus:border-color3 active:border-color3";
  const styleLabel = "block font-medium leading-6 text-gray-900";
  const [fullInput, setFullInput] = useState(false)
  const [formLogin, setFormLogin] = useState({
    email: "",
    pass: "",
  });
  const [showPass, setShowPass] = useState(false)
  const handleInput = (event) => {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    if (formLogin.email!="" && formLogin.pass !="" ) {
      setFullInput(true)
    }
  }, [formLogin]);
  const handlerLogin = () =>{
    if (fullInput) {
      dispatch(login(formLogin))
      
    }
  }
  
  return (
    <>
      <div className="grid grid-cols-2 gap-4 bg-color8 p-4 min-h-screen font-jakarta">
        <div className="flex flex-1 rounded-3xl bg-white">
          <img src={poster} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center gap-14 ">
            <div className="flex flex-row w-full">
              <a href="/" className="flex flex-row text-color5 hover:text-color3 font-bold">
                <ArrowLeft></ArrowLeft>
                Back
              </a>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-center text-color5 font-semibold text-4xl">Senang Melihatmu Kembali</h1>
              <p className="text-center text-slate-600 font-normal text-base">Silahkan isi data Anda</p>
            </div>
            <div className="flex flex-col gap-10 px-4 w-full max-w-xl">
              <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={styleLabel}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`block flex-1 rounded-lg ${styleInput}`}
                    onChange={handleInput}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className={styleLabel}>
                    Password
                  </label>
                  <div className="flex">
                    <input
                      id="pass"
                      name="pass"
                      type={showPass?"text":"password"}
                      autoComplete="current-password"
                      required
                      className={`peer block flex-1 rounded-s-lg border-e-0 outline-none ring-0 ${styleInput}`}
                      onChange={handleInput}
                    />
                    <button onClick={()=>setShowPass(!showPass)} className="flex justify-around items-center rounded-e-lg p-2 bg-white text-slate-300 hover:text-slate-500 border-2 border-s-0 border-slate-300 peer-focus:border-color3">
                      {showPass ? (
                        <Visibility></Visibility>
                      ) : (
                        <VisibilityOff></VisibilityOff>
                      )}
                    </button>
                  </div>
                </div>

              </div>
              <button
                className="py-2 px-8 rounded-xl shadow-xl bg-color5 text-white font-jakarta font-bold
                    hover:bg-color4 active:bg-slate-500  active:shadow-none focus:bg-color5  focus:shadow-xl disabled:bg-slate-500"
                onClick={handlerLogin}        
              >
                Login
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-center text-color5">
            <h1>Belum punya akun?</h1>&emsp;
            <a href="/register" className="hover:text-color3 font-bold">Sign Up</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

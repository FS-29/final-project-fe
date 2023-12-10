import poster from "../assets/svg/authPoster.svg";
import { useEffect, useState } from "react";
import {useDispatch , useSelector} from "react-redux";
import ArrowLeft from "../assets/svg/ArrowLeft";
import Visibility from "../assets/svg/Visibility";
import VisibilityOff from "../assets/svg/VisibilityOff";
import { register } from "../redux/reducers/auth-reducers";
import LoadingComp from "../component/loadingComp/LoadingComp";
import { useNavigate } from "react-router-dom";


function RegisterPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const styleInput = "focus:ring-color8 ring-0 border-2 border-gray-300 focus-within:border-color3 focus:border-color3 active:border-color3";
  const styleLabel = "block font-medium leading-6 text-gray-900";
  const [role, setRole] = useState();
  const [formLogin, setFormLogin] = useState({
    nama: "",
    username: "",
    email: "",
    pass: "",
  });
  const [showPass, setShowPass] = useState(false);
  const handleInput = (event) => {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value,
    });
  };
  const handleRegister = () => {
    if (formLogin.nama!=""&&formLogin.username!=""&&formLogin.email!=""&&formLogin.pass!=""&&role!=null) {
      dispatch(register(formLogin,role))
    }
  }

  // console.log(role);
  return (
    <>
      <div className="grid grid-cols-2 gap-4 bg-color8 p-4 min-h-screen font-jakarta">
        <div className="flex flex-1 rounded-3xl bg-white">
          <img src={poster} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center gap-12 ">
            <div className="flex flex-row w-full">
              <a
                href="/"
                className="flex flex-row text-color5 hover:text-color3 font-bold"
              >
                <ArrowLeft></ArrowLeft>
                Back
              </a>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-center text-color5 font-semibold text-4xl">
                Senang Melihatmu Kembali
              </h1>
              <p className="text-center text-slate-600 font-normal text-base">
                Silahkan isi data Anda
              </p>
            </div>
            <div className="flex flex-col gap-10 px-4 w-full max-w-xl">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nama" className={styleLabel}>
                    Role:
                  </label>
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex items-center">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={() => setRole(1)}
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Squad
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={() => setRole(2)}
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Konselor
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="default-radio-2"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={() => setRole(3)}
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Admin
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="nama" className={styleLabel}>
                    Nama lengkap
                  </label>
                  <input
                    id="nama"
                    name="nama"
                    type="text"
                    autoComplete="nama"
                    required
                    className={`block flex-1 rounded-lg ${styleInput}`}
                    onChange={handleInput}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="username" className={styleLabel}>
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className={`block flex-1 rounded-lg ${styleInput}`}
                    onChange={handleInput}
                  />
                </div>
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
                  <label htmlFor="pass" className={styleLabel}>
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
              onClick={handleRegister}
                className="py-2 px-8 rounded-xl shadow-xl bg-color5 text-white font-jakarta font-bold
                    hover:bg-color4 active:bg-slate-500  active:shadow-none focus:bg-color5  focus:shadow-xl disabled:bg-slate-500"
              >
                Register
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-center text-color5">
            <h1>Belum punya akun?</h1>&emsp;
            <button onClick={()=>navigate("/login")} className="hover:text-color3 font-bold"> Sign In</button>
          </div>
        </div>
      </div>
      <LoadingComp/>
    </>
  );
}

export default RegisterPage;

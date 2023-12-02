import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

const initialValue = {
    nama: "",
    noTlp: "",
    prov: "",
    kabKota: "",
    kec: "",
    jenjang: "",
    sekolah: "",
    tglKejadian: "",
    tingkatan: "",
    deskripsi: "",
    isLoading: ""
};

function laporanReducers(state = initialValue, action) {
  switch (action.type) {
    case "ISLOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
function isLoading() {
  return {
    type: "ISLOADING",
  };
}

export const login = (dataUser) => async (dispatch) => {
  dispatch(isLoading());
  const { data } = await axios.post(API_KEY + "auth/login", dataUser, {
    headers: { "Access-Control-Allow-Origin": true },
  });
  if (data.message == "berhasil login") {
    console.log("bisamasuk");
    localStorage.setItem("token", data.token);
    dispatch(isLoginReducer());
  }
};

export const register = (dataUser, role) => async (dispatch) => {
  dispatch(isLoading());
  const { data } = await axios.post(API_KEY + "auth/register", dataUser, {
    headers: { "Access-Control-Allow-Origin": true, Role: role },
  });
  console.log(data);
  if (data != null) {
    dispatch(login({ email: dataUser.email, pass: dataUser.pass }));
  }
};

export default laporanReducers;

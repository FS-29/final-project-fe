import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

const initialValue = {
  isLogin: false,
  isLoading: false,
  statusLogin: 0,
  statusRegis: 0,
};

function authReducers(state = initialValue, action) {
  switch (action.type) {
    case "ISLOGIN":
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        statusLogin:0,
        statusRegis:0
      };

    case "ISLOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
        isLoading: false,
      };
    case "ISLOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "NOTLOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "STATUSLOGIN":
      return{
        ...state,
        statusLogin: action.payload,
      }
      case "STATUSREGIS":
        return{
          ...state,
          statusRegis: action.payload,
        }
    default:
      return state;
  }
}
export function isLoginReducer() {
  return {
    type: "ISLOGIN",
  };
}
export function isLogout() {
  return {
    type: "ISLOGOUT",
  };
}
export function isLoading() {
  return {
    type: "ISLOADING",
  };
}
export function notLoading() {
  return {
    type: "NOTLOADING",
  };
}
export function setStatusLogin(data) {
  return {
    type: "STATUSLOGIN",
    payload: data
  };
}
export function setStatusRegis(data) {
  return {
    type: "STATUSREGIS",
    payload: data
  };
}

export const login = (dataUser) => async (dispatch, getState) => {
  // const { authUser } = getState();
  dispatch(isLoading());
  try {
    const { data } = await axios.post(API_KEY + "auth/login", dataUser, {
      headers: { "Access-Control-Allow-Origin": true },
    });  
    if (data.message == "berhasil login") {
      localStorage.setItem("token", data.token);
      dispatch(isLoginReducer());
    }
  } catch (error) {
    if (error.response.data.message == "password salah") {
      dispatch(setStatusLogin(1))
      dispatch(notLoading());
    } else if (error.response.data.message == "belum regis") {
      dispatch(setStatusLogin(2))
      dispatch(notLoading());
    }  else if (error.response.data.message == "Network Error") {
      dispatch(setStatusLogin(3))
      dispatch(notLoading());
    }
  }
};

export const register = (dataUser, role) => async (dispatch) => {
  dispatch(isLoading());
  try {
    const { data } = await axios.post(API_KEY + "auth/register", dataUser, {
      headers: { "Access-Control-Allow-Origin": true, Role: role },
    });
    if (data != null) {
      dispatch(login({ email: dataUser.email, pass: dataUser.pass }));
    } 
  } catch (error) {
    if (error.response.data.message=="email sudah terdaftar") {
      dispatch(setStatusRegis(1))
      dispatch(notLoading());
    }else if(error.response.data.message=="gagal register"){
      dispatch(setStatusRegis(2))
      dispatch(notLoading());
    }
  }
};

export default authReducers;

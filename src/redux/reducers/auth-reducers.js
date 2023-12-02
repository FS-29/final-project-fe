import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

const initialValue = {
  isLogin: false,
  isLoading: false,
};

function authReducers(state = initialValue, action) {
  switch (action.type) {
    case "ISLOGIN":
      return {
        ...state,
        isLogin: true,
        isLoading: false,
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
            isLoading:false
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

export const login = (dataUser) => async (dispatch,getState) => {
    const {authUser} = getState()
    console.log(authUser);
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

export default authReducers;

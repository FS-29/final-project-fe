import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

const initialValue = {
  foto: "",
  username: "",
  role: 0,
};

function profilReducers(state = initialValue, action) {
  switch (action.type) {
    case "SETPROFIL":
      return {
        ...state,
        foto: action.payload.foto,
        username: action.payload.username,
        role: action.payload.role,
      };

    case "DELPROFIL":
      localStorage.removeItem("token");
      return {
        ...state,
        foto: "",
        username: "",
        role: 0,
      };
    default:
      return state;
  }
}
function setProfilV(payload) {
  return {
    type: "SETPROFIL",
    payload: payload,
  };
}
export function delProfilV() {
  return {
    type: "DELPROFIL",
  };
}
export const getProfil = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const data = await axios(API_KEY + "profil", {
    headers: {
      "Access-Control-Allow-Origin": true,
      Authorization: "Bearer " + token,
    },
  });
  const data2 = await axios(API_KEY + "profil/role", {
    headers: {
      "Access-Control-Allow-Origin": true,
      Authorization: "Bearer " + token,
    },
  });
  dispatch(
    setProfilV({
      foto: data.data.data.picture,
      username: data.data.data.username,
      role:data2.data.role ,
    })
  );
};

export default profilReducers;

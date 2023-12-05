const initialValue = {
  contentId: 1
};

function dashboardReducers(state = initialValue, action) {
  switch (action.type) {
    case "SETCONTENT":
      return {
        ...state,
        contentId:action.payload       
      };

    default:
      return state;
  }
}

export function setContentId(payload) {
  return {
    type: "SETCONTENT",
    payload: payload,
  };
}

export default dashboardReducers;

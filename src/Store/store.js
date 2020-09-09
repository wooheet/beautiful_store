import { createStore } from "redux";

const SET_MAP = "setMap";
const ADD_MARKER = "addMarker";

const setMap = (map) => {
  return {
    type: SET_MAP,
    map: map
  }
};

const addMarker = (marker, overlay) => {
  return {
    type: ADD_MARKER,
    marker: marker,
    overlay: overlay
  }
};

const reducer = (state = {
  maskMap: {
    map: null,
    storeList: [],
    oldMarker: [],
    oldOverlay: []
  }
}, action) => {
  console.log(action);
  switch (action.type) {

    case SET_MAP:
      return {
        ...state,
        maskMap: {
          ...state.maskMap,
          map: action.map
        }
      };

    case ADD_MARKER:
      console.log("adding... :",action);
      return {
        ...state,
        maskMap: {
          ...state.maskMap,
          oldMarker: action.marker,
          oldOverlay: action.overlay
        }
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  setMap,
  addMarker
};

export default store;
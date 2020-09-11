import { createStore } from "redux";

const SET_MAP = "setMap";
const SET_CVS_LIST = "setCvsList";
const ADD_MARKER = "addMarker";

const setMap = (map) => {
  return {
    type: SET_MAP,
    map: map
  }
};

const setCvsList = (cvsList) => {
  return {
    type: SET_CVS_LIST,
    cvsList: cvsList
  };
};

const addMarker = (marker, overlay) => {
  return {
    type: ADD_MARKER,
    marker: marker,
    overlay: overlay
  }
};

const reducer = (state = {
    cvsMap: {
      map: null,
      list: [],
      oldMarker: [],
      oldOverlay: []
    }
}, action) => {
  switch (action.type) {

    case SET_MAP:
      return {
        ...state,
        cvsMap: {
          ...state.cvsMap,
          map: action.map
        }
      };

    case SET_CVS_LIST:
      return {
        ...state,
        cvsMap: {
          ...state.cvsMap,
          storeList: action.storeList
        }
      };

    case ADD_MARKER:
      return {
        ...state,
        cvsMap: {
          ...state.cvsMap,
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
  addMarker,
  setCvsList
};

export default store;
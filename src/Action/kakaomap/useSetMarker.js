import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../../Store/store";

let cvsList = [];
let kakaoMap = {};
let markerOld = [];
let overlayOld = [];

const useSetMarker = () => {

  const { map, list, oldMarker, oldOverlay } = useSelector(state => ({
    map: state.cvsMap.map,
    list: state.cvsMap.list,
    oldMarker: state.cvsMap.oldMarker,
    oldOverlay: state.cvsMap.oldOverlay
  }));

  const dispatcher = useDispatch();

  cvsList = list;
  kakaoMap = map;
  markerOld = oldMarker;
  overlayOld = oldOverlay;

  const setMarker = () => {

    // Marker 초기화
    // eslint-disable-next-line array-callback-return
    markerOld.map(value => {
      value.setMap(null);
    });

    // overlay 초기화
    // eslint-disable-next-line array-callback-return
    overlayOld.map(value => {
      value.setMap(null);
    });

    let marker_new = [];
    let overlay_new = [];

    kakaoMap.getLevel();

    dispatcher(actionCreators.addMarker(marker_new, overlay_new));
  };

  const resetMarker = () => {
    cvsList.clear();
  };

  return { setMarker, resetMarker };
}

export default useSetMarker;
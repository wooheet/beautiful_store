import { useSelector } from "react-redux";
import useSetMarker from "./useSetMarker";

const { kakao } = window;

let kakaoMap = null;

const useCenterChanged = () => {
  const { map } = useSelector(state => ({
    map: state.cvsMap.map
  }));

  const { setMarker } = useSetMarker();

  kakaoMap = map;

  const setEvent = () => {
    if (kakaoMap !== null) {
      console.log("Set Event: center change")
      kakao.maps.event.addListener(kakaoMap, 'dragend', () => {
        kakaoMap.getCenter();
        setMarker();
      });
    } else {
      console.log("Center changed: not found kakao map")
    }
  };

  return { setEvent };

}

export default useCenterChanged;
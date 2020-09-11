import { useSelector } from "react-redux";
import useIpAddr from "../useIpAddr";
import useSetMarker from "./useSetMarker";
const { kakao } = window

let kakaoMap = {};

const useGeolocation = () => {

  const { map } = useSelector(state => ({ map: state.cvsMap.map }), []);
  const { getIpAddr } = useIpAddr();
  const { setMarker } = useSetMarker();

  kakaoMap = map;

  const getGeo = () => {
    if (navigator.geolocation) {
      if (kakaoMap !== null) {
        navigator.geolocation.getCurrentPosition(position => {
            let locPosition = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude)
            kakaoMap.panTo(locPosition);

            let myMarker = new kakao.maps.Marker({
                map: kakaoMap,
                position: locPosition,
                title: "My Location"
            });

            const iwContent = '<div style="padding:5px;">My Location</div>';
            let iwRemoveable = true;

            let infowindow = new kakao.maps.InfoWindow({
                content : iwContent,
                removable : iwRemoveable
           });

            kakao.maps.event.addListener(myMarker, 'mouseover', function() {
                infowindow.open(map, myMarker);
            });

            kakao.maps.event.addListener(myMarker, 'mouseout', function() {
                infowindow.close();
            });

            kakaoMap.setCenter(locPosition);

            setMarker();

            }, () => getIpAddr());
      } else {
          console.log("Geo location: not fount kakao map")
      }
    } else {
      alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.")
    }
  }
  return { getGeo };
}

export default useGeolocation;



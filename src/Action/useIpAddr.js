import Axios from "axios";
import { useSelector } from "react-redux";
import { message } from "antd";
import useCVSData from "./useCVSData";
import useSetMarker from "./kakaomap/useSetMarker";

const { kakao } = window;

let kakaoMap = null;

const useIpAddr = () => {

  const { map } = useSelector(state => ({ map: state.cvsMap.map }), []);

  kakaoMap = map;

  const { getCSVDataByGeo } = useCVSData();
  const { setMarker } = useSetMarker();


  const getIpAddr = async () => {
    await Axios.get("https://ipapi.co/json")
      .then((response) => {
        if (kakaoMap !== null) {
          getCSVDataByGeo(response.data.latitude, response.data.longitude, 3000).then(() => {
            setMarker();
          });
          kakaoMap.panTo(new kakao.maps.LatLng(response.data.latitude, response.data.longitude));
          message.info({ content: "IP 위치 사용(오차 발생)", key: "IpInfo", duration: 2 });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return { getIpAddr };
};
export default useIpAddr;

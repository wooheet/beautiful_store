import React, { useEffect } from "react";
import KaKaoMap from "../Components/KakaoMap";
import useGeolocation from "../Action/kakaomap/useGeolocation";
import useCenterChanged from "../Action/kakaomap/useCenterChanged";
import { useSelector } from "react-redux";


const CvsMap = () => {
  const { map } = useSelector(state => ({ map: state.cvsMap.map }), []);
  const { getGeo } = useGeolocation();
  const { setEvent } = useCenterChanged();

  useEffect(() => {
    getGeo();
    setEvent();
  }, [getGeo, map, setEvent]);

  return <div>
    <div style={{ height: "70vh", padding:"30px" }}>
      <KaKaoMap />
    </div>
  </div>
}

export default CvsMap;
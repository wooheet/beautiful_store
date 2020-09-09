import React, { useEffect } from "react";
import KaKaoMap from "../Components/KakaoMap";
import useGeolocation from "../Action/kakaomap/useGeolocation";
import useCenterChanged from "../Action/kakaomap/useCenterChanged";
import { useSelector } from "react-redux";


const MaskMap = () => {
  const { map } = useSelector(state => ({ map: state.maskMap.map }), []);

  const { getGeo } = useGeolocation();
  const { setEvent } = useCenterChanged();

  useEffect(() => {
    getGeo();
    setEvent();
  }, [getGeo, map, setEvent]);
  
  return <div>
    <div style={{ height: "70vh", paddingTop:"30px", paddingBottom:"50px", paddingLeft: "30px", paddingRight: "30px" }}>
      <KaKaoMap >
      </KaKaoMap>
    </div>
  </div>
}

export default MaskMap;
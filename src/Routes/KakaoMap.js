// import React, { useEffect } from "react";
// import KaKaoMap from "../Components/KakaoMap";
// import useGeolocation from "../Action/kakaomap/useGeolocation";
// import useCenterChanged from "../Action/kakaomap/useCenterChanged";
// import { useSelector } from "react-redux";
//
//
// const MaskMap = () => {
//   const { map } = useSelector(state => ({ map: state.maskMap.map }), []);
//
//   const { getGeo } = useGeolocation();
//   const { setEvent } = useCenterChanged();
//
//   useEffect(() => {
//     getGeo();
//     setEvent();
//   }, [getGeo, map, setEvent]);
//
//   return <div>
//     <div style={{ height: "70vh", paddingTop:"30px", paddingBottom:"50px", paddingLeft: "30px", paddingRight: "30px" }}>
//       <KaKaoMap >
//       </KaKaoMap>
//     </div>
//   </div>
// }
//
// export default MaskMap;

//https://deveb22.gitbook.io/react-kakao-maps/usage/map
import React from "react";
import { KakaoMap, CustomOverlay } from "react-kakao-maps";

export default function MapView() {
  return (
      <KakaoMap
        apiUrl={process.env.REACT_APP_KAKAOMAP_API_URL}
        width="100%"
        height="700px"
        level={2}
        lat={37.490826}
        lng={127.03342}
      />
  );
}
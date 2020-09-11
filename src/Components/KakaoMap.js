import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../Store/store";

const { kakao } = window;

const KakaoMap = () => {

  const dispatcher = useDispatch();

  useEffect(() => {
    const container = document.getElementById('mask-map');

    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 5
    };

    const initMap = new kakao.maps.Map(container, options);
    const mapTypeControl = new kakao.maps.MapTypeControl();
    const zoomControl = new kakao.maps.ZoomControl();

    initMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    initMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    dispatcher(actionCreators.setMap(initMap), [initMap]);

  }, [dispatcher])

  return (
      <>
        <div id="mask-map" style={{height: "100%"}}/>
        <p id="result">

        </p>
      </>
  );
}

export default KakaoMap;
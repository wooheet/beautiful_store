import { useState } from "react";
// import Axios from "axios";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../Store/store";

//TODO: Change to Search Category
const useCVSData = () => {
  // const dispatch = useDispatch();

  const [ cvsData ] = useState(
    {
      address: "",
      count: 0,
        stores: [
        {
          addr: "",
          code: "",
          created_at: "",
          lat: 0,
          lng: 0,
          name: "",
          type: ""
        }
      ]
    }
  );

  const getCVSDataByAddr = async (location) => {
    console.log("Get CSV Data Addr: location: ", location);
  };

  const getCSVDataByGeo = async (lat, lng, m) => {
    console.log("Get CSV Data Geo:", "lat: ", lat, " lng: ", lng, " m: ", m);

    // await Axios.get(`https://`)
    //     .then(response => {
    //       const { cvsList } = response.data
    //       dispatch(actionCreators.setCvsList(cvsList));
    //       console.log(cvsList.length);
    //     }).catch(error => {
    //       console.log(error);
    //     });
  };

  return { ...cvsData, getCVSDataByAddr, getCSVDataByGeo };
}

export default useCVSData;
import {useEffect, useState} from "react";
import axios from "axios";
import {BACK_END_HOST} from "../../login/screens/LoginScreen";

const MyPageScreen = () => {
  console.log("MyPageScreen Start!");
  const orderUser = "djk"; //for Test

  useEffect(() => {
    const fetchMyOrder = async () => {
      await axios.post(BACK_END_HOST + "/getUserOrder", {
        orderUser,
      }).then(response => {
        if (response.status == 200) {
          console.log("Succeeded to fetch my order!");
          console.log(response.data);
        }
      }).catch((error => {
        console.error("Failed to fetch my order!", error);
      }))
    }
    fetchMyOrder();
  }, []);
  return
}

export default MyPageScreen;
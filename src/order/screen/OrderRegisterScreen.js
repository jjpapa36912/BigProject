import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BACK_END_HOST} from "../../login/screens/LoginScreen";

const OrderRegisterScreen = () => {
  const [orderTitle, setOrderTitle] = useState();
  const [orderContents, setOrderContents] = useState();
  console.log("OrderRegisterScreen Start!");

  const handleWriteCompleteClick = async () => {
    const id = 1; // for test
    const orderUser = "djk";// for test
    const orderTitle = "OrderRegisterTest";// for test
    const orderContents = "OrderRegisterTest";// for test
    await axios.post(BACK_END_HOST + "/registerOrder", {
      id,
      orderUser,
      orderTitle,
      orderContents
    }).then(response => {
      if (response.status == 200) {
        console.log('Succeeded to register order data!');
        // navigate("/boardList");
      }
    }).catch(error => {
      console.error('Failed to register order data!', error)
    });
  }
  useEffect(()=>{
    setOrderTitle("s");
    handleWriteCompleteClick();
  },[setOrderTitle])

  return
};

export default OrderRegisterScreen;
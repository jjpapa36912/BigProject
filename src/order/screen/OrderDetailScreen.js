import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BACK_END_HOST} from "../../login/screens/LoginScreen";

const OrderDetailScreen = () => {
  const [orderEntity, setOrderEntity] = useState();
  console.log("OrderDetailScreen Start!!");

  const id = 2; // for test
  useEffect(() => {
    const fetchData = async () => {
      await axios.post(BACK_END_HOST + '/orderDetail/' + id)
      .then(response => {
        console.log('Succeeded fetching data');
        setOrderEntity(response.data);
      }).catch(error => {
        console.error('Error fetching data:', error);
      })
    };
    fetchData();
  }, [])

  return
};

export default OrderDetailScreen;
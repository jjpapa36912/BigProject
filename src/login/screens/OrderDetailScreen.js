import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {BACK_END_HOST} from "./LoginScreen";
import {View, StyleSheet, FlatList} from "react-native";


const OrderDetailScreen = () => {
  // const id = useParams();
  const [orderEntity, setOrderEntity] = useState();
  console.log("OrderDetailScreen Start!!");

  const id = 2;
  const fetchData = async () => {
    await axios.post(BACK_END_HOST + '/orderDetail/' + id)
    .then(response => {
      console.log('Succeeded fetching data');
      setOrderEntity(response.data);
    }).catch(error => {
      console.error('Error fetching data:', error);
    })

  };

  // fetchData();
  // useEffect(() => {
  //   fetchData();
  // }, [orderEntity]);

  return <View></View>
  // <div>
  //   <h2>Detail View</h2>
  //   {orderEntity && ( // Check if item is truthy before rendering
  //       <div key={orderEntity.id}>
  //         <p>Title: {orderEntity.orderTitle}</p>
  //         <p>Description: {orderEntity.orderContents}</p>
  //       </div>
  //   )}
  // </div>

};

export default OrderDetailScreen;
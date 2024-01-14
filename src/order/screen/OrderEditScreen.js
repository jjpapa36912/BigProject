import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BACK_END_HOST} from "../../login/screens/LoginScreen";

const OrderEditScreen = (idForOrderEdit) => {
  const [id, setId] = useState();
  const [orderTitle, setOrderTitle] = useState();
  const [orderContents, setOrderContents] = useState();
  console.log("OrderEditScreen Start!");
  useEffect(() => {
    const fetchData = async () => {
      await axios.post(BACK_END_HOST + '/orderDetail/' + idForOrderEdit.data)
      .then(response => {
        console.log('Succeeded to load order detail for edit.');
        setId(response.data.id);
      }).catch(error => {
        console.error('Failed to load order detail for edit.', error)
      })
    };
    fetchData();
  }, [])

  const onClickEditCompleteButton = async () => {
    // const orderTitle = "testTitle"; // for test
    // const orderContents = "testContents"; // for test
    await axios.post(BACK_END_HOST + '/updateOrder', {
      id,
      orderTitle,
      orderContents,
    }).then(response => {
      if (response.status === 200) {
        console.log('Succeeded to Edit order!')
        // navigate('/boardList')
      }
    }).catch(error => {
      console.log('Failed to edit order data!', error);
    });
  }

  return
};

export default OrderEditScreen;
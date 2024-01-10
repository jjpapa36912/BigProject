import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
// import {Button, ButtonGroup} from "react-bootstrap";
import {BACK_END_HOST} from "./LoginScreen";

const OrderEditScreen = (idForOrderEdit) => {
  // const {id} = useParams();
  const [orderEntity, setOrderEntity] = useState();
  const [id, setId] = useState();
  const [orderTitle, setOrderTitle] = useState();
  const [orderContents, setOrderContents] = useState();
  // const navigate = useNavigate();
  console.log("OrderEditScreen Start!");
  console.log("OrderEditScreen Start!>>> ", idForOrderEdit.data);


  useEffect(() => {
    const fetchData = async () => {
      await axios.post(BACK_END_HOST + '/orderDetail/' + idForOrderEdit.data)
      .then(response => {
        console.log('Succeeded to load order detail for edit.');
        // setOrderEntity(response);
        setId(response.data.id);
        // setOrderTitle(response.data.orderTitle);
        // setOrderContents(response.data.orderContents);
      }).catch(error => {
        console.error('Failed to load order detail for edit.', error)
      })
    };
    fetchData();
  }, [])

  const onClickEditCompleteButton = async () => {
    // const orderTitle = "testTitle";
    // const orderContents = "testContents";
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
  // onClickEditCompleteButton()

  return
  // <div>
  //   <h2>Detail View</h2>
  //   {orderEntity && ( // Check if item is truthy before rendering
  //       <div key={orderEntity.id}>
  //         {/*<div contentEditable="true">Title: {orderEntity.orderTitle}</div>*/}
  //         <div><p>Title: </p><textarea
  //             value={orderTitle}
  //             onChange={(e) => setOrderTitle(e.target.value)}
  //             rows={1} // Specify the number of visible rows
  //             cols={50} // Specify the number of visible columns
  //         />
  //         </div>
  //         <p>Description: </p><textarea
  //           value={orderContents}
  //           onChange={(e) => setOrderContents(e.target.value)}
  //           rows={10} // Specify the number of visible rows
  //           cols={50} // Specify the number of visible columns
  //       />
  //         <hr/>
  //         {/*<ButtonGroup>*/}
  //         {/*  <Button size="sm" color="primary"*/}
  //         {/*          onClick={() => onClickEditCompleteButton()}>완료</Button>*/}
  //         {/*</ButtonGroup>*/}
  //       </div>
  //   )}
  // </div>

};

export default OrderEditScreen;
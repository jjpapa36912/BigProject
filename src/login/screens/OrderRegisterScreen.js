import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BACK_END_HOST, MEMBER_ENTITY_USER_ID_SESSION} from "./LoginScreen";
import {useNavigate} from "react-router-dom";
// import {AsyncStorage} from "@react-native-async-storage/async-storage";

const OrderRegisterScreen = () => {
  const [orderTitle, setOrderTitle] = useState();
  const [orderContents, setOrderContents] = useState();
  // const id = AsyncStorage.getItem(MEMBER_ENTITY_USER_ID_SESSION)
  // const orderUser = AsyncStorage.getItem(MEMBER_ENTITY_USER_ID_SESSION)
  // const navigate = useNavigate()
  console.log("OrderRegisterScreen Start!");

  const handleWriteCompleteClick = async () => {
    const id = 1;
    const orderUser = "djk";
    const orderTitle = "OrderRegisterTest";
    const orderContents = "OrderRegisterTest";
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
  // <div>
  //   <h2>Registration View</h2>
  //   <div>
  //     <p>User ID: </p><textarea
  //       value={orderUser}
  //       rows={1} // Specify the number of visible rows
  //       cols={10} // Specify the number of visible columns
  //   />
  //     <div><p>Title: </p><textarea
  //         value={orderTitle}
  //         onChange={(e) => setOrderTitle(e.target.value)}
  //         rows={1} // Specify the number of visible rows
  //         cols={50} // Specify the number of visible columns
  //     />
  //     </div>
  //     <p>Description: </p><textarea
  //       value={orderContents}
  //       onChange={(e) => setOrderContents(e.target.value)}
  //       rows={10} // Specify the number of visible rows
  //       cols={50} // Specify the number of visible columns
  //   />
  //     <hr/>
  //     <ButtonGroup>
  //       <Button size="sm" color="primary"
  //               onClick={() => handleWriteCompleteClick()}>등록</Button>
  //     </ButtonGroup>
  //   </div>
  //
  // </div>
  // );
};

export default OrderRegisterScreen;
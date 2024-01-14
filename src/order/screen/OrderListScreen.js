import React, {useEffect, useState} from "react";
import axios from "axios";
import {BACK_END_HOST} from "../../login/screens/LoginScreen";
import {StyleSheet} from "react-native";
import OrderEditScreen from "./OrderEditScreen";

const OrderListScreen = () => {
  const [orderList, setOrderList] = useState([]);

  console.log("OrderListScreen Start!");
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(BACK_END_HOST + '/orderList')
      .then(response => {
        const fetchedData = Object.values(response.data)
        console.log("Succeeded to fetch data")
        setOrderList(fetchedData);
      }).catch(error => {
        console.log("Failed to fetch Data for board list" + error);
      });
    }
    fetchData();
  }, []);

  const handleItemClick = (id) => {
    // navigate('/boardDetailView/' + id);
    //
    // navigation.navigate(LoginScreen, {testData});
  }

  const handleEditClick = (id) => {
    // navigate('/boardEditView', {id : id});
  }
  const handleWriteClick = () => {
    // navigate('/boardRegisterOrderView');
  }
  const handleDeleteClick = async (realId) => {
    const id = 5
    await axios.post(BACK_END_HOST + "/deleteOrder", {
      id
    }).then(response => {
      if (response.status == 200) {
        console.log("Succeeded to delete order")
        // navigate("/orderList")
      }
    })
  }
  // handleDeleteClick()
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 18,
      paddingTop: 35,
      backgroundColor: '#ffffff'
    },
    HeadStyle: {
      height: 50,
      alignContent: "center",
      backgroundColor: '#ffe0f0'
    },
    TableText: {
      margin: 10
    }
  });

  const idForOrderEdit = 2; // for test
  return <OrderEditScreen data={idForOrderEdit}/>
}

export default OrderListScreen;
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Text} from "react-native-paper";
import LoginScreen, {MEMBER_ENTITY_USER_ID_SESSION} from "./LoginScreen";
import {BACK_END_HOST} from "./LoginScreen";
import { useNavigation } from '@react-navigation/native';

import { NativeRouter, Router, Route, Routes, Link } from "react-router-native";
import {View} from "react-native";
import {Row, Rows, Table} from "react-native-table-component";

// import {Text} from "react-native";

const OrderListScreen = () => {
  const [orderList, setOrderList] = useState([]);
  // const navigate = useNavigate()
  useEffect(()=>{
    const fetchData = async () => {
      await axios.get(BACK_END_HOST + '/orderList')
      .then(response => {
        const fetchedData = Object.values(response.data)
        // console.log({fetchedData}.fetchedData[0].name);
        console.log("Succeeded to fetch data")
        setOrderList(fetchedData);
      }).catch(error => {
        console.log("Failed to fetch Data for board list" + error);
      });
    }


    fetchData();
  },[]);


  const handleItemClick = (id) => {
    // navigate('/boardDetailView/' + id);
    // const testData = {test: "testttt"}
    //
    // navigation.navigate(LoginScreen, {testData});
  }
  const userData = {
    username: 'john_doe',
    age: 25,
  };
  // navigation.navigate(LoginScreen, userData);
  const data = Object.entries(userData);
  // useEffect(()=>{
  //   navigate(LoginScreen, userData);
  //   console.log(">>>???" +userData["username"]);
  // },[])


  // console.log(">>>???" +data);

  const handleEditClick = (id) => {
    // navigate('/boardEditView', {id : id});
  }
  const handleWriteClick = () => {
    // navigate('/boardRegisterOrderView');
  }
  const handleDeleteClick = async (id) => {
    console.log(">>>" + id);
    await axios.post("/deleteOrder", {
      id
    }).then(response => {
      if (response.status == 200){
        console.log("Succeeded to delete order")
        // navigate("/orderList")
      }
    })
  }
  return(
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
        <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
        <Rows data={state.DataTable} textStyle={styles.TableText}/>
      </Table>
  </View>
  // <Text>OrderListScreen : ({orderList.map(item => item.name).join(', ')})</Text>
)


}

export default OrderListScreen;
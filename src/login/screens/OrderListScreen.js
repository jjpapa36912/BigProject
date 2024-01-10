import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Text} from "react-native-paper";
import LoginScreen, {MEMBER_ENTITY_USER_ID_SESSION} from "./LoginScreen";
import {BACK_END_HOST} from "./LoginScreen";
import { useNavigation } from '@react-navigation/native';

import { NativeRouter, Router, Route, Routes, Link } from "react-router-native";
import {View, StyleSheet, FlatList} from "react-native";
import {Row, Rows, Table} from "react-native-table-component";
import OrderEditScreen from "./OrderEditScreen";

// import {Text} from "react-native";

const OrderListScreen = () => {
  const [orderList, setOrderList] = useState([]);

  console.log("OrderListScreen Start!");
  useEffect(()=>{
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
  },[]);


  const handleItemClick = (id) => {
    // navigate('/boardDetailView/' + id);
    // const testData = {test: "testttt"}
    //
    // navigation.navigate(LoginScreen, {testData});
  }

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
  // const table = ({orderList}) => (
  //     <View style={{ flexDirection: 'row' }}>
  //       <View style={{ width: 50, backgroundColor: 'lightyellow'}}>
  //         <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>{orderList.map(data=>data.name)}</Text>
  //       </View>
  //       <View style={{ width: 400, backgroundColor: 'lightpink'}}>
  //         <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{orderList.map(data=>data.name)}</Text>
  //       </View>
  //       <View style={{ width: 400, backgroundColor: 'lavender'}}>
  //         <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{orderList.map(data=>data.name)}</Text>
  //       </View>
  //     </View>
  //   // <View style={{ flexDirection: 'row' }}>
  //   //
  //   //   <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}} >
  //   //
  //   //
  //   //
  //   //     <Row data="sss" style={styles.HeadStyle} textStyle={styles.TableText}/>
  //   //     <Rows data="sssss" textStyle={styles.TableText}/>
  //   //
  //   //   </Table>
  //   // </View>
  // )
  const idForOrderEdit = 2;
  return <OrderEditScreen data={idForOrderEdit} />
        // <FlatList data="d" renderItem={table} />
  // <Text>OrderListScreen : ({orderList.map(item => item.name).join(', ')})</Text>



}

export default OrderListScreen;
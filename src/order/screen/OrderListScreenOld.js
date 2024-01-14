import React, {useEffect, useState} from "react";
import axios from "axios";
import {BACK_END_HOST} from "../../login/screens/LoginScreen";
import {View} from "react-native";
import {Row, Rows, Table} from "react-native-table-component";

const OrderListScreen = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
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
  }, []);

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
      if (response.status == 200) {
        console.log("Succeeded to delete order")
        // navigate("/orderList")
      }
    }).catch(error => {
      console.error("Failed to delete order", error);
    })
  }
  return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle}
               textStyle={styles.TableText}/>
          <Rows data={state.DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
      // <Text>OrderListScreen : ({orderList.map(item => item.name).join(', ')})</Text>
  )

}

export default OrderListScreen;
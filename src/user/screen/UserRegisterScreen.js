import React, {useState} from 'react'
import {Text} from 'react-native-paper'
import axios from "axios";
import {BACK_END_HOST} from "../../login/screens/LoginScreen";

const UserRegisterScreen = () => {
  const userId = "djk"; // for test
  const name = "djk";// for test
  const password = "1234";// for test
  const memberRegister = async () => {
    await axios.post(BACK_END_HOST + "/memberRegister", {
      userId,
      name,
      password,
    }).then(response => {
      if (response.status === 200) {
        console.log(response.data);
      }
    }).catch(function (error) {
      console.log(error.response.data);
    })
  }
  memberRegister();
  return <Text>MemberRegisterScreen</Text>
}

export default UserRegisterScreen;
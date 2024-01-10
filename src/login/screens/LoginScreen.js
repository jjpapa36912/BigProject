import axios from "axios";
import {resolvePath} from "react-router-native";
import {Text} from "react-native";
import {useEffect} from "@types/react";
import {useState} from "react";
import {useRoute} from "@react-navigation/native";


export const MEMBER_ENTITY_ID_SESSION = 'memberId'
export const MEMBER_ENTITY_USER_ID_SESSION = 'userId'
export const BACK_END_HOST = "http://127.0.0.1:8080";

const LoginScreen = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const route = useRoute()
  const state = props.navigation;
  //
  // // const data = route.params?.userData
  console.log("::::"+state);
  console.log("::::"+state.params);

  // const data = Object.values(testData);

  // console.log(">>>?@@@@@??" +testData["username"]);




  const loginId = "djk"
  const password = "1234"

  console.log("!111111");
  // useEffect(() => {
  const login = async () => {
    console.log("!222222222");
    const response = await axios.post(BACK_END_HOST + '/login', {
      loginId,
      password,
    })
    console.log(response.status)
    if (response.status == 200) {
      console.log("Login Successful");
      // sessionStorage.setItem(MEMBER_ENTITY_ID_SESSION, response.data.id);
      // sessionStorage.setItem(MEMBER_ENTITY_USER_ID_SESSION, response.data.userId);
      setLoggedIn(true);

    }

  }
  login()
  // },[])

  return <Text>ssssssss</Text>
}

export default LoginScreen;

// import React, { useState } from 'react'
// import { TouchableOpacity, StyleSheet, View } from 'react-native'
// import { Text } from 'react-native-paper'
// import Background from '../components/Background'
// import Logo from '../components/Logo'
// import Header from '../components/Header'
// import Button from '../components/Button'
// import TextInput from '../components/TextInput'
// import BackButton from '../components/BackButton'
// import { theme } from '../core/theme'
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'
//
// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState({ value: '', error: '' })
//   const [password, setPassword] = useState({ value: '', error: '' })
//
//   const onLoginPressed = () => {
//     const emailError = emailValidator(email.value)
//     const passwordError = passwordValidator(password.value)
//     if (emailError || passwordError) {
//       setEmail({ ...email, error: emailError })
//       setPassword({ ...password, error: passwordError })
//       return
//     }
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'Dashboard' }],
//     })
//   }
//
//   return (
//     <Background>
//       <BackButton goBack={navigation.goBack} />
//       <Logo />
//       <Header>Welcome back.</Header>
//       <TextInput
//         label="Email"
//         returnKeyType="next"
//         value={email.value}
//         onChangeText={(text) => setEmail({ value: text, error: '' })}
//         error={!!email.error}
//         errorText={email.error}
//         autoCapitalize="none"
//         autoCompleteType="email"
//         textContentType="emailAddress"
//         keyboardType="email-address"
//       />
//       <TextInput
//         label="Password"
//         returnKeyType="done"
//         value={password.value}
//         onChangeText={(text) => setPassword({ value: text, error: '' })}
//         error={!!password.error}
//         errorText={password.error}
//         secureTextEntry
//       />
//       <View style={styles.forgotPassword}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('ResetPasswordScreen')}
//         >
//           <Text style={styles.forgot}>Forgot your password?</Text>
//         </TouchableOpacity>
//       </View>
//       <Button mode="contained" onPress={onLoginPressed}>
//         Login
//       </Button>
//       <View style={styles.row}>
//         <Text>Don’t have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
//           <Text style={styles.link}>Sign up</Text>
//         </TouchableOpacity>
//       </View>
//     </Background>
//   )
// }
//
// const styles = StyleSheet.create({
//   forgotPassword: {
//     width: '100%',
//     alignItems: 'flex-end',
//     marginBottom: 24,
//   },
//   row: {
//     flexDirection: 'row',
//     marginTop: 4,
//   },
//   forgot: {
//     fontSize: 13,
//     color: theme.colors.secondary,
//   },
//   link: {
//     fontWeight: 'bold',
//     color: theme.colors.primary,
//   },
// })

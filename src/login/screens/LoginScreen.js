import axios from "axios";
import {Text} from "react-native";
import {useEffect} from "react";
import {setStorage} from "../../utils/AsyncStorage";

export const MEMBER_ENTITY_ID_SESSION = 'memberId'
export const MEMBER_ENTITY_USER_ID_SESSION = 'userId'
export const BACK_END_HOST = "http://127.0.0.1:8080";

const LoginScreen = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const loginId = "djk" // for test
  const password = "1234" // for test

  useEffect(() => {
    const login = async () => {
      await axios.post(BACK_END_HOST + '/login', {
        loginId,
        password,
      }).then(response => {
        if (response.status == 200) {
          console.log("Login Successful");
          setStorage(MEMBER_ENTITY_ID_SESSION, response.data.id);
          setStorage(MEMBER_ENTITY_USER_ID_SESSION, response.data.userId);
          setLoggedIn(true);
        }
      }).catch(error => {
        console.error("Failed to Login!", error)
      })
    }
    login()
  }, [])

  return <Text>ssssssss</Text>
}

export default LoginScreen;
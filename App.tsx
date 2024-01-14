/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from "./src/login/screens/LoginScreen";
import UserRegisterScreen from "./src/user/screen/UserRegisterScreen";
import OrderListScreen from "./src/order/screen/OrderListScreen";
import {theme} from "./src/login/core/theme";
import OrderDetailScreen from "./src/order/screen/OrderDetailScreen";
import OrderEditScreen from "./src/order/screen/OrderEditScreen";
import OrderRegisterScreen from "./src/order/screen/OrderRegisterScreen";
import MyPageScreen from "./src/user/screen/MyPageScreen";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator()


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

      <SafeAreaView style={backgroundStyle}>
      <Provider theme={theme}>
        <NavigationContainer>


        <Stack.Navigator
              initialRouteName="MyPage"
              screenOptions={{
                headerShown: false,
              }}
          >
            <Stack.Screen name="OrderList" component={OrderListScreen} />
            <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
          <Stack.Screen name="OrderEdit" component={OrderEditScreen} />
          <Stack.Screen name="OrderRegister" component={OrderRegisterScreen} />
          <Stack.Screen name="MyPage" component={MyPageScreen} />

            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            {/*<Stack.Screen name="UserRegisterScreen" component={UserRegisterScreen} />*/}
            {/*<Stack.Screen name="Dashboard" component={Dashboard} />*/}
          {/*<OrderListScreen/>*/}

          </Stack.Navigator>
        </NavigationContainer>

      </Provider>
      {/*<LoginScreen/>*/}
{/*<NativeRouter>*/}
{/*      /!*<Router>*!/*/}
{/*        <Routes>*/}
{/*          /!*<OrderListScreen/>*!/*/}
{/*      /!*    /!*<Switch>*!/*!/*/}
{/*          <Route path="/orderListScreen" element={<OrderListScreen/>}/>*/}
{/*      /!*    /!*<Route path="/login" element={<LoginScreen/>}/>*!/*!/*/}
{/*      /!*    /!*<Route path="/boardList" element={<BoardList />} />*!/*!/*/}
{/*      /!*    /!*<Route path="/boardRegisterOrderView" element={<OrderRegisterScreen />} />*!/*!/*/}
{/*      /!*    /!*<Route path="/boardDetailView/:id" element={<OrderDetailScreen />} />*!/*!/*/}
{/*      /!*    /!*<Route path="/boardEditView/:id" element={<OrderEditScreen />} />*!/*!/*/}
{/*      /!*    /!*</Switch>*!/*!/*/}
{/*        </ Routes>*/}
{/*        /!* Add more routes as needed *!/*/}
{/*      /!*</Router>*!/*/}
{/*</NativeRouter>*/}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

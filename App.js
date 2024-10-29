import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import Header from "./components/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import ShopScreen from "./components/ShopScreen";
import AccessoryScreen from "./components/AccessoryScreen";
import BookingScreen from "./components/BookingScreen";
import SearchScreen from "./components/SearchScreen";
import Intro from "./components/Intro";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import { Provider } from "react-redux";
import store from "./store";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "black",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="paw" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Accessory"
          component={AccessoryScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="bag" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="calendar" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerShown: true,
            header: () => <Header navigation={navigation} />,
          })}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="Intro"
            component={Intro}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={Register}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ForgotPassword"
            component={ForgotPassword}
          />
          <Stack.Screen name="MainTabs" component={TabNavigator} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

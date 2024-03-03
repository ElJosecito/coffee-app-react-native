import { StyleSheet, View, Text } from "react-native";
import React from "react";

//import bottom nav
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import screens
import HomeScreen from "../../screens/HomeScreen";
import CartScreen from "../../screens/CartScreen";
import FavoriteScreen from "../../screens/FavoriteScreen";
import UserScreen from "../../screens/UserScreen";

//tab navigator
const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: 'black',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
});


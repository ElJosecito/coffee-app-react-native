import { StyleSheet, View, Text } from "react-native";
import React from "react";

//import bottom nav
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import screens
import HomeScreen from "../../screens/HomeScreen";
import CartScreen from "../../screens/CartScreen";
import FavoriteScreen from "../../screens/FavoriteScreen";
import UserScreen from "../../screens/UserScreen";

//icons
//fontawesome
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="home"
                size={focused ? 28 : 24}
                color={focused ? "white" : "grey"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="shopping-cart"
                size={focused ? 28 : 24}
                color={focused ? "white" : "grey"}
              />
              
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="heart"
                size={focused ? 28 : 24}
                color={focused ? "white" : "grey"}
              />     
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="user"
                size={focused ? 28 : 24}
                color={focused ? "white" : "grey"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: "#00582F",
  },
});

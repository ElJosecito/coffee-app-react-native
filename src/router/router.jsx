import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import UserScreen from "../screens/UserScreen";

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

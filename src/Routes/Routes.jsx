import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
//screens
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import UserScreen from "../screens/UserScreen";

import BottomNav from "./navigators/BottomNav";

//
import { useSafeAreaInsets } from "react-native-safe-area-context";

//create stack
const Stack = createStackNavigator();



const Routes = () => {

  const insets = useSafeAreaInsets();

  return (
    <View style={{flex: 1, paddingTop: insets.top}}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="bottom nav"
          component={BottomNav}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};

export default Routes;

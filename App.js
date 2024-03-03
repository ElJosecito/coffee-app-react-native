import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Router from "./src/router/router";
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Router />
    </View>
  );
}

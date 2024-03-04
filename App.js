import { StatusBar } from "expo-status-bar";
import Routes from "./src/Routes/Routes";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <StatusBar style="auto" />
      <Routes />
    </SafeAreaProvider>
  );
}

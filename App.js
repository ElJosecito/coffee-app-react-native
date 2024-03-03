import { StatusBar } from "expo-status-bar";
import Routes from "./src/Routes/Routes";
import "react-native-gesture-handler";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}

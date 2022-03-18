import { StyleSheet } from 'react-native'
import "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTab";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationDrawer/>      
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
  },
  horizontal:{
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 0,
  }
})
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useState } from "react-native";
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InfoProducto from "./components/InfoProducto";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{title: 'Home'}}/>
        <Stack.Screen name="Info" component={InfoProducto} options={{title: ' Info del Producto'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



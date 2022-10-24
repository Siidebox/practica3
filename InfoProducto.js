import React from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";


function InfoProducto() {
  const route = useRoute();
  const navigation=useNavigation();

  
  const yuhu = () => {
    navigation.navigate("HomeScreen")
  };

  return (
    <View>
      <Text testID="detalle">{route.params.title}</Text>
      <Button
        testID="volver"
        title="volver"
        color={"#81B6E7"}
        onPress={yuhu}
      ></Button>
    </View>
  );
}

export default InfoProducto;

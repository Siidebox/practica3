import React from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  FlatList,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import InfoProducto from "./InfoProducto";
import { useNavigation } from "react-router-dom";

function Producto(props) {

console.log("hola")

  const haceAlgo = () => {
    props.navigation.navigate("Info", {
      title: props.info.title,
      hola :"patata"
    });
  };

  return (
    <View testID={"item_" + Number(props.info.id)} style={styles.todo}>
      <Text style={styles.titulo} testID={"title_" + Number(props.info.id)}>
        {props.info.title}
      </Text>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: props.info.thumbnail,
        }}
      />
      <Button
        testID={"button_" + Number(props.info.id)}
        title="Ver mas"
        color={"#81B6E7"}
        onPress={haceAlgo}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  todo: {
    alignItems: "center",
  },
});
export default Producto;

// muestraProductos =() =>{

//   if pulsado{
//     <FlatList>
//       data={cosas}

//       renderItem={({ item }) => (
//         <View >
//           item.title
//           item.images[0]
//           .
//           .

//           <Button/>
//         </View>
//       )}

//     </FlatList>
//   }

//   else
//   <FlatList>
//   data={prop.theproducts}

//   renderItem={({ item }) => (
//     <View >
//       item.title
//       item.images[0]
//       .
//       <Button/>
//     </View>
//   )}
// </FlatList>
// }

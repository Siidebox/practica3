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
import Producto from "./Producto";
import { useNavigation } from "react-router-dom";



function SearchPage(props) {
  



  const datos= props.theproducts;
  const [productos, setProductos] = useState(datos);
  const [texto, setTexto] = useState("");
  // const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Producto info={item} urlImg={item.images[0]} navigation={props.navigation}/>
    </View>
  );

  const filtrar = () => {
   
    let nombre = texto.toUpperCase().replace(/\s/g, "");
    let filtrados = props.theproducts.filter((item) => {
      return item.title.toUpperCase().replace(/\s/g, "").includes(nombre);
    });

    setProductos(filtrados);
  };

  return (
    <View style={styles.container}>
      <Text testID="catalogo" style={styles.titulo}>
        Catálogo
      </Text>
      <TextInput
        testID="filtro"
        placeholder="producto a buscar"
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
      ></TextInput>
      <Button
        testID="buscador"
        title="Buscar"
        onPress={() => filtrar()}
      ></Button>
     

      <FlatList data={productos} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#6AF4F0",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titulo: {
    fontSize: 30,
  },
});

export default SearchPage;






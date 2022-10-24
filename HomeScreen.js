import React from "react";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import Header from "./Header";
import Spiner from "./Spiner";
import SearchPage from "./SearchPage";
import { StatusBar } from "expo-status-bar";

import { mockdata } from "./constants/products";
import CONFIG from "./config/config";
import { useNavigation } from "react-router-dom";

function HomeScreen(props) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // console.log(props)
  // const nav= props.navigation;
  // console.log("🚀 ~ file: HomeScreen.js ~ line 19 ~ HomeScreen ~ nav", nav)
  

  const callServer = async () => {
    if (CONFIG.use_server) {
      try {
        const req = await fetch(CONFIG.server_url);
        const res = await req.json();
        setProducts(res.products);
        console.log("server-true");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("server-false");

      setProducts(mockdata.products);
    }
  };

  useEffect(() => {
    async function recogeDatos() {
      await callServer();

      setTimeout(() => {
        setLoading(false);
      }, 300);
    }

    recogeDatos();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor=""
        translucent={true}
      />

      {loading ? (
        <Spiner />
      ) : (
        <View>
          <Header />
          
          <SearchPage theproducts={products} navigation={props.navigation} />
        </View>
      )}
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
});
export default HomeScreen;

import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";

function Header() {
  
  return (
    <View testID="cabecera" style={styles.hear}>
      <Image
        testID="logo"
        style={styles.logo}
        source={require("./../assets/iamgen.png")}
      ></Image>
      <Text testID="mensaje" style={styles.title}>
        guillermo sanchez recuero
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hear: {
    maxHeight:400,
    padding: 10,
    backgroundColor: "#eaeaea",
    alignItems:"center",
   
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },

  logo: {
    marginTop: 16,
    alignItems: "center",
    height: 100,
    width: 100,
  },
});

export default Header;

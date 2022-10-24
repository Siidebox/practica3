import React from 'react'
import { StyleSheet, Text, View, Image } from "react-native";

function Spiner() {
  return (
    <View>
        <Image testID='loading' style={styles.perro} source={require("./../assets/perro.gif")}></Image>
        
    </View>
  )
  
}
const styles = StyleSheet.create({
    perro:{
        
    }
})

export default Spiner
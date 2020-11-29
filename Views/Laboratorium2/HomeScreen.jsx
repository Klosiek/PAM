import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
        <Button onClick={() => navigation.navigate("Quad")}>
        Wyliczanie pierwiastka
        </Button>
        <Button onClick={() => navigation.navigate('MinMax')}>
        Losowe wypełnianie tablicy
        </Button>
        <Button onClick={() => navigation.navigate('Guess')}>
        Zgadywanka
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "grey",
      paddingLeft: 10,
      paddingTop: 10,
      color: "white"
    }
});

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";

function MyInput({ setValue, displayText, value }) {
  return (
    <View style={styles.myInput}>
      <Text>{displayText}</Text>
      <TextInput
        style={styles.textEditorInput}
        onChangeText={(e) => setValue(e)}
        value={value}
      />
    </View>
  );
}

export function Lab2_2({ navigation }) {
  const reg = /^\d+$/;
  const [aValue, setAValue] = useState("");
  const [bValue, setBValue] = useState("");
  const [cValue, setCValue] = useState("");
  const [delta, setDelta] = useState("");
  const [x1, setX1] = useState("");
  const [x2, setX2] = useState("");

  useEffect(() => {
    liczDelta();
    liczX1();
    liczX2();
  }, [aValue, bValue, cValue]);

  const liczDelta = () => {
    setDelta(bValue * bValue - 4 * aValue * cValue);
  };

  const liczX1 = () => {
    if (delta < 0) setX1("");
    else if (delta == 0) setX1((0 - bValue) / (2 * aValue));
    else setX1((0 - bValue - Math.sqrt(delta)) / (2 * aValue));
  };

  const liczX2 = () => {
    if (delta < 0) setX1("");
    else if (delta == 0) setX1("");
    else setX2((0 - bValue + Math.sqrt(delta)) / (2 * aValue));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputList}>
        <MyInput
          displayText="Podaj a: "
          setValue={(value) => setAValue(value)}
          value={aValue}
        />
        <MyInput
          displayText="Podaj b: "
          setValue={(value) => setBValue(value)}
          value={bValue}
        />
        <MyInput
          displayText="Podaj c: "
          setValue={(value) => setCValue(value)}
          value={cValue}
        />
      </View>
      <View>Delta: {delta}</View>
      <View>
        Wynik: X1={x1}, X2={x2}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    paddingLeft: 10,
    paddingTop: 10,
  },
  textEditorInput: {
    width: 100,
    height: 20,
    backgroundColor: "white",
  },
  inputList: {
    display: "flex",
    flexDirection: "column",
  },
  myInput: {
    width: 160,
    justifyContent: "space-between",
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
  },
});

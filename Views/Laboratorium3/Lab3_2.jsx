import React, { useEffect, useState } from "react";
import { Text, View, Button, TextInput, Image } from "react-native";
import randomWords from "random-words";

export const Lab3_2 = () => {
  const [value, setValue] = useState("");
  const [word, setWord] = useState(randomWords());
  const [guessed, setGuessed] = useState(new Set());
  const [attempt, setAttempt] = useState(1);
  const [answer, setAnswer] = useState("");
  const [letters, setLetters] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(0);

  function splitWord() {
    setAnswer(word.split("").map((lett) => (guessed.has(lett) ? lett : " _ ")));
  }

  function handleGuess(value) {
    setLetters([...letters, value, ", "]);
    setGuessed(guessed.add(value));
    setAttemptsLeft(attemptsLeft + (word.includes(value) ? 0 : 1));
    splitWord();
  }

  function newGame() {
    setGuessed(new Set([]));
    setWord(randomWords());
    setAttempt(attempt + 1);
    setAttemptsLeft(0);
    setLetters([]);
  }

  function handlePicture() {
    let image = require("./wisielec/0.png");
    switch (attemptsLeft) {
      case 0:
        image = require("./wisielec/0.png");
        break;
      case 1:
        image = require("./wisielec/1.png");
        break;
      case 2:
        image = require("./wisielec/2.png");
        break;
      case 3:
        image = require("./wisielec/3.png");
        break;
      case 4:
        image = require("./wisielec/4.png");
        break;
      case 5:
        image = require("./wisielec/5.png");
        break;
      case 6:
        image = require("./wisielec/6.png");
        break;
      case 7:
        image = require("./wisielec/7.png");
        break;
      case 8:
        image = require("./wisielec/8.png");
        break;
      case 9:
        image = require("./wisielec/9.png");
        break;
      case 10:
        image = require("./wisielec/10.png");
        break;
    }
    return image;
  }

  useEffect(() => {
    splitWord();
  }, [word]);

  useEffect(() => {
    if (attemptsLeft > 10) {
      alert("Przegrałeś");
      newGame();
    }
  }, [attemptsLeft]);

  return (
    <View>
      <Image source={handlePicture()} />
      <Text>Próba: {attempt}</Text>
      <Text>Szukane słowo: {answer}</Text>
      <TextInput
        value={value}
        onChangeText={(value) => {
          handleGuess(value);
        }}
      />
      <Button onPress={newGame} title="Następna Próba" />
    </View>
  );
};

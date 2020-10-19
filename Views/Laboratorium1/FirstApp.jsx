import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';

function calculateFarenheitFromCelcius(celciusValue) {
    return (celciusValue * 9) / 5 + 32;
}

export function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                title='Text Editor'
                onPress={() => navigation.navigate('TextEditor')}
            />
            <Button
                title='Converter'
                onPress={() => navigation.navigate('Converter')}
            />
        </View>
    );
}

export function TextEditor({ navigation }) {
    const [value, setValue] = useState("Dzień dobry");
    return (
        <View style={styles.container}>
            <TextInput
                multiline
                style={styles.textEditorInput}
                onChangeText={text => setValue(text)}
                value={value}
            />
        </View>
    );
}

export function Converter({ navigation }) {
    const [celciusValue, setCelciusValue] = useState("");
    const [fahrenheitValue, setFahrenheitValue] = useState("");

    const reg = /^\d+$/;

    const testNumber = (text) => {
        if (reg.test(text)) {
            return true;
        }
        else {
            return false;
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                keyboardType={"number-pad"}
                multiline
                style={styles.converterInput}
                onChangeText={text => {
                    if (testNumber(text)) {
                        setCelciusValue(text);
                        setFahrenheitValue(calculateFarenheitFromCelcius(text));
                    }
                }}
                value={celciusValue}
            />
            <TextInput
                editable={false}
                multiline
                style={styles.converterInput}
                value={fahrenheitValue}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'grey'
    },
    textEditorInput: {
        height: '100%',
        width: '100%',
    },
    converterInput: {
        height: 60,
        width: 150,
        borderColor: 'blue',
        borderWidth: 1,
        backgroundColor: 'white'
    }
});

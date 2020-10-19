import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                title='Text Editor'
                onPress={() => navigation.navigate('TextEditor')}
            />
        </View>
    );
}

export function TextEditor({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Dzień dobry</Text>
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
    }
});

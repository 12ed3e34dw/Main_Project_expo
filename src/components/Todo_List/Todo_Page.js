import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput,} from 'react-native';

export default function Todo_Page() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? styles_dark : styles_light;

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => setIsDarkTheme(!isDarkTheme)}
                style={styles.themeToggle}
            >
                <Text style={styles.buttonText}>
                    {isDarkTheme ? 'Switch to Light' : 'Switch to Dark'}
                </Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Enter email"
                placeholderTextColor={isDarkTheme ? '#ccc' : '#555'}
            />










        </SafeAreaView>
    );
}

// DARK THEME
const styles_dark = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#888',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        color: '#fff',
        backgroundColor: '#1e1e1e',
        marginTop: 150,
    },
    themeToggle: {
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

// LIGHT THEME
const styles_light = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        color: '#000',
        backgroundColor: '#fff',
        marginTop: 20,
    },
    themeToggle: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 6,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
    },
});

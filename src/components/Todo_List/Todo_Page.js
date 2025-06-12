import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput,} from 'react-native';
import {darkStyles,lightStyles} from '/src/styles/Setting_styles';
export default function Todo_Page() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkStyles : lightStyles;

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
                style={styles.input} placeholder="Enter email" placeholderTextColor={isDarkTheme ? '#ccc' : '#555'}/>
        </SafeAreaView>
    );
}


import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';
import AuthService from './src/screens/Auth/Authorization';

export default function App() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? styles_dark : styles_white;





    return (
        <View style={styles.container }>


         <AuthService />

        </View>
    );
}

// DARK THEME
const styles_dark = StyleSheet.create({


});

// LIGHT THEME
const styles_white = StyleSheet.create({

});

import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';













export default function SettingsPage() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? styles_dark : styles_white;





    return (
        <View style={styles.container }>

        </View>
    );
}

// DARK THEME
const styles_dark = StyleSheet.create({


});

// LIGHT THEME
const styles_white = StyleSheet.create({

});

import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';
import {darkStyles,lightStyles} from '/src/styles/Setting_styles';













export default function SettingsPage() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <View style={styles.container }>

        </View>
    );
}


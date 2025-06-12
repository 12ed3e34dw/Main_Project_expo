import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';


//
//Main
import Auth from './src/screens/Auth/Authorization';



//Test Page
//import Register from './src/screens/Auth/Registration_Page';
//import Main from './src/screens/Home/Main_Page';
import Calendar from './src/screens/Home/Calendar_Page';
//import Todo_Page from "./src/components/Todo_List/Todo_Page";



export default function App() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? styles_dark : styles_white;





    return (
        <View style={styles.container }>
<Calendar />
        </View>
    );
}

// DARK THEME
const styles_dark = StyleSheet.create({


});

// LIGHT THEME
const styles_white = StyleSheet.create({

});

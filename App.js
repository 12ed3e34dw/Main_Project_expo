import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';


export default function App() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? styles_dark : styles_white;



    return (
        <SafeAreaView style={styles.container}>
       <View style={styles.container}>





           <TouchableOpacity>
               <View style={styles.button_Auth}>
                   <Text style={styles.button_text}>Войти</Text>
               </View>
           </TouchableOpacity>


            </View>
        </SafeAreaView>
    );
}

// DARK THEME
const styles_dark = StyleSheet.create({
button_Auth: {
    width:180,
    height:80,
    backgroundColor: '#333',
    top:590,
    left:105,
    borderRadius:10,
},
    button_text: {
        top:30,
        left:70,
        color:'white',

    },
});

// LIGHT THEME
const styles_white = StyleSheet.create({

});

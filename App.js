import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';


export default function App() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? styles_dark : styles_white;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');


    const Forms = () => {
        if (email === '' || !email.includes('@') || !email.includes('.')) {
            Alert.alert('Помилка', 'Некоректний email');
            return;
        }
        if (password !== password1) {
            Alert.alert('Помилка', 'Паролі не співпадають');
            return;
        }
        if (phone.length < 10) {
            Alert.alert('Помилка', 'Некоректний номер телефону');
            return;
        }
    };


    return (
       <View style={  styles.container }>
           <Text style={ styles.main_text}>Authorization</Text>
           <Text style={styles.text_name}>Введите имя</Text>
           <TextInput style={styles.input_name} placeholder="Name"/>
           <Text style={styles.text_surname}>Введите Фамилию</Text>
           <TextInput style={styles.input_surname} placeholder="Surname"/>
           <Text style={styles.text_email}>Введите электронная почта </Text>
           <TextInput style={styles.input_email} placeholder="Email" onChangeText={setEmail}/>
           <Text style={styles.text_password}>Введите пароль</Text>
           <TextInput style={styles.input_password} placeholder="Password"  secureTextEntry onChangeText={setPassword}/>
         <Text style={styles.text_password_1}>Повторите введенный пароль</Text>
           <TextInput style={styles.input_password_1} placeholder="Password"  secureTextEntry onChangeText={setPassword1}/>
           <TouchableOpacity>
               <View style={styles.button_Auth}>
                   <Text style={styles.button_text}>Войти</Text>
               </View>
           </TouchableOpacity>
<TouchableOpacity onPress={()=>{}}>
           <Text style={styles.text_url_regist}>Создать аккаунт</Text>
</TouchableOpacity>
            </View>
    );
}

// DARK THEME
const styles_dark = StyleSheet.create({
button_Auth: {
    width:180,
    height:80,
    backgroundColor: '#333',
    top:260,
    left:105,
    borderRadius:10,
},
    button_text: {
        top:30,
        left:70,
        color:'white',

    },
    input_name: {
        top:120,
        left:10,
        width:"95%",
        height:"10%",
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    input_surname: {
        top:140,
        left:10,
        width:"95%",
        height:"10%",
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    input_email: {
        top:160,
        left:10,
        width:"95%",
        height:"10%",
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    input_password: {
        top:180,
        left:10,
        width:"95%",
        height:"10%",
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    input_password_1: {
        top:200,
        left:10,
        width:"95%",
        height:"10%",
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
main_text: {
top:'15%',
    left:'35%',
    fontSize:20,
},
text_url_regist: {
    top:'1370%',
    left:'35%',
    color:'blue',
},



    text_name:{
        top:'16%',
        left:'5%',
    },
    text_surname: {
        top:'19%',
        left:'5%',
    },
    text_email: {
        top:'22%',
        left:'5%',
    },
    text_password:{
        top:'25%',
        left:'5%',
    },
    text_password_1:{
        top:'28%',
        left:'5%',
    },

});

// LIGHT THEME
const styles_white = StyleSheet.create({

});

import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';

import {darkStyles,lightStyles} from '/src/styles/Setting_styles';

export default function Registration_Page() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkStyles : lightStyles;
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
            <Text style={ styles.main_text}>Registration</Text>
            <Text style={styles.text_email}>Введите электронная почта </Text>
            <TextInput style={styles.input_email} placeholder="Email" onChangeText={setEmail}/>
            <Text style={styles.text_password}>Введите пароль</Text>
            <TextInput style={styles.input_password} placeholder="Password"  secureTextEntry onChangeText={setPassword}/>
            <Text style={styles.text_password_1}>Повторите введенный пароль</Text>
            <TextInput style={styles.input_password_1} placeholder="Password"  secureTextEntry onChangeText={setPassword1}/>
            <TouchableOpacity>
                <View style={styles.button_Regist}>
                    <Text style={styles.button_text}>Создать аккаунт</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}


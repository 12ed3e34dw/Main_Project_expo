import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';

import {darkStyles,lightStyles} from '/src/styles/Auth_styles';

export default function Authorization({ navigation }) {

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
            <Text style={ styles.main_text}>Authorization</Text>
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
            <TouchableOpacity>
                <Text style={styles.text_url_regist}>Создать аккаунт</Text>
            </TouchableOpacity>
        </View>
    );
}


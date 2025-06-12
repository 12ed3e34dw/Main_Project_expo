import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions} from 'react-native';

import {darkStyles,lightStyles,baseStyles} from '/src/styles/Calendar_styles';




export default function App() {
    const [date, setDate] = useState(new Date());
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkStyles : lightStyles;

    const toggleTheme = () => setIsDarkTheme(prev => !prev);

    const getCalendarDays = () => {
        const days = [];
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();

        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const firstWeekDay = (firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1);


        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
        const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();

        for (let i = firstWeekDay - 1; i >= 0; i--) {
            const day = new Date(currentYear, currentMonth - 1, prevMonthLastDay - i);
            days.push({ day, isCurrentMonth: false, isToday: isToday(day) });
        }

        for (let i = 1; i <= lastDay; i++) {
            const day = new Date(currentYear, currentMonth, i);
            days.push({ day, isCurrentMonth: true, isToday: isToday(day) });
        }

        const totalCells = 42;
        const nextDaysCount = totalCells - days.length;
        for (let i = 1; i <= nextDaysCount; i++) {
            const day = new Date(currentYear, currentMonth + 1, i);
            days.push({ day, isCurrentMonth: false, isToday: isToday(day) });
        }

        return days;
    };

    const changeMonth = (offset) => {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + offset);
        setDate(newDate);
    };

    const isToday = (day) => {
        const today = new Date();
        return (
            day.getDate() === today.getDate() &&
            day.getMonth() === today.getMonth() &&
            day.getFullYear() === today.getFullYear()
        );
    };

    const monthName = date.toLocaleString('uk-UA', { month: 'long' });
    const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => changeMonth(-1)}>
                    <Text style={styles.arrows}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{`${monthName} ${date.getFullYear()}`}</Text>
                <TouchableOpacity onPress={() => changeMonth(1)}>
                    <Text style={styles.arrows}>{'>'}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.weekRow}>
                {dayNames.map((day) => (
                    <Text key={day} style={styles.weekDay}>{day}</Text>
                ))}
            </View>

            <View style={styles.calendarGrid}>
                {getCalendarDays().map(({ day, isCurrentMonth, isToday }, index) => (
                    <View key={index} style={styles.cell}>
                        <Text style={[
                            styles.dayText,
                            !isCurrentMonth && styles.dimmed,
                            isToday && styles.today
                        ]}>
                            {day.getDate()}
                        </Text>
                    </View>
                ))}
            </View>
            <TouchableOpacity style={styles.themeToggle} onPress={toggleTheme}>
                <Text style={styles.themeText}>
                    {isDarkTheme ? 'Світла тема' : 'Темна тема'}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}






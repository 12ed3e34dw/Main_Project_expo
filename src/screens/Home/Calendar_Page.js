// import React, { useState,useEffect, } from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';
//
//
//
//
//
//
//
//
//
//
//
//
//
// export default function SettingsPage() {
//
//     const [isDarkTheme, setIsDarkTheme] = useState(true);
//     const styles = isDarkTheme ? styles_dark : styles_white;
//
//
//
//
//
//     return (
//         <View style={styles.container }>
//
//             <View style={styles.container_1}>
//
//             <Text style={styles.time_text}>11:11</Text>
//
//
//
//
//
//
//
//
//
//             </View>
//
//         </View>
//     );
// }
//
// // DARK THEME
// const styles_dark = StyleSheet.create({
//     container_1:{
//         top:120,
//         height:270,
//          backgroundColor: '#3b3b3b',
//     },
//     text:{
//         top:40,
//        left:10,
//     },
//     time_text:{
//         top:10,
//          fontSize:51,
//         left:40,
//         color:'white',
//     },
//     text_1:{
//
//     },
// });
//
// // LIGHT THEME
// const styles_white = StyleSheet.create({
//
// });
//
import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions} from 'react-native';

export default function App() {
    const [date, setDate] = useState(new Date());
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? styles_dark : styles_white;

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


const screenWidth = Dimensions.get('window').width;
const cellWidth = screenWidth / 7;

const baseStyles = {
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 12,
        backgroundColor: '#f9f9f9',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        flex: 1,
        color: '#1a1a1a',
    },
    arrowButton: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
    arrows: {
        fontSize: 24,
        color: '#1a1a1a',
    },
    weekRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingBottom: 4,
    },
    weekDay: {
        width: cellWidth,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 13,
       // color: '#555',
    },
    calendarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cell: {
        width: cellWidth,
        height: cellWidth * 1.05,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#e0e0e0',
    },
    dayText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#222',
    },
    dimmed: {
        color: '#aaa',
    },
    today: {
        backgroundColor: '#0078d7',
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 6,
        color: '#fff',
        overflow: 'hidden',
    },
    themeToggle: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#0078d7',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    themeText: {
        color: '#fff',
        fontWeight: 'bold',
    }
};

const styles_dark = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#1e1e1e',
    },
    title: {
        ...baseStyles.title,
        color: '#ffffff',
    },
    arrows: {
        ...baseStyles.arrows,
        color: '#ffffff',
    },
    weekDay: {
        ...baseStyles.weekDay,
        color: '#cccccc',
    },
    dayText: {
        ...baseStyles.dayText,
        color: '#eeeeee',
    },
    dimmed: {
        ...baseStyles.dimmed,
        color: '#666',
    },
    cell: {
        ...baseStyles.cell,
        borderColor: '#333',
    },
    today: {
        ...baseStyles.today,
        backgroundColor: '#0a84ff',
        color: '#fff',
    },
});


const styles_white = StyleSheet.create({
    ...baseStyles,
    container: {
        ...baseStyles.container,
        backgroundColor: '#ffffff',
    },
    title: {
        ...baseStyles.title,
        color: '#1a1a1a',
    },
    arrows: {
        ...baseStyles.arrows,
        color: '#1a1a1a',
    },
    weekDay: {
        ...baseStyles.weekDay,
        color: '#555',
    },
    dayText: {
        ...baseStyles.dayText,
        color: '#222',
    },
    cell: {
        ...baseStyles.cell,
        borderColor: '#e0e0e0',
    },
});



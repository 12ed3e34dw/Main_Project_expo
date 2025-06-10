import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';


export default function Calendar_Page() {
    const [date, setDate] = useState(new Date());
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => setIsDarkTheme(prev => !prev);
    const styles = isDarkTheme ? styles_dark : styles_white;

    const getCalendarDays = () => {
        const days = [];
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();

        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const firstWeekDay = (firstDayOfMonth.getDay() + 6) % 7;

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
                    <Text style={styles.arrows}>{'^'}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{`${monthName} ${date.getFullYear()}`}</Text>
                <TouchableOpacity onPress={() => changeMonth(1)}>
                    <Text style={styles.arrows}>{'v'}</Text>
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
        </SafeAreaView>
    );
}

// DARK THEME
const styles_dark = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b3b3b',
        paddingTop: 40,
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 140,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        left: -105,
    },
    arrows: {
        fontSize: 24,
        color: 'white',
    },
    weekRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        top: 10,
    },
    weekDay: {
        width: '14.28%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    calendarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        top: 10,
    },
    cell: {
        width: '14.28%',
        alignItems: 'center',
        paddingVertical: 10,
    },
    dayText: {
        fontSize: 16,
        color: 'white',
    },
    dimmed: {
        color: '#aaa',
    },
    today: {
        backgroundColor: '#0078d7',
        padding: 5,
        borderRadius: 5,
        color: 'white',
    },
    themeToggle: {
        position: 'absolute',
        top: 190,
        right: 120,
    }
});

// LIGHT THEME
const styles_white = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 40,
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 140,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
        left: -105,
    },
    arrows: {
        fontSize: 24,
        color: '#222',
    },
    weekRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        top: 10,
    },
    weekDay: {
        width: '14.28%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#222',
    },
    calendarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        top: 10,
    },
    cell: {
        width: '14.28%',
        alignItems: 'center',
        paddingVertical: 10,
    },
    dayText: {
        fontSize: 16,
        color: '#222',
    },
    dimmed: {
        color: '#ccc',
    },
    today: {
        backgroundColor: '#0078d7',
        padding: 5,
        borderRadius: 5,
        color: 'white',
    },
    themeToggle: {
        position: 'absolute',
        top: 190,
        right: 120,
    }
});

import {Dimensions} from "react-native";

const screenWidth = Dimensions.get('window').width;
const cellWidth = screenWidth / 7;


const darkStyles=StyleSheet.create({
    ...baseStyles,
    container: {
        left:15,
        top:70,
        ...baseStyles.container,
        backgroundColor: '#1a1a1a', //#1a1a1a
    },
    title: {
        ...baseStyles.title,
        color: '#ffffff', //#ffffff
    },
    arrows: {
        ...baseStyles.arrows,
        color: '#ffffff',
    },
    weekDay: {
        ...baseStyles.weekDay,
        color: '#555', //
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

const lightStyles=StyleSheet.create({
    ...baseStyles,
    container: {
        left:15,
        top:70,
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

const baseStyles=StyleSheet.create({
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
        marginTop: -50,
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
});

import {StyleSheet} from "react-native";

const darkStyles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#888',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        color: '#fff',
        backgroundColor: '#1e1e1e',
        marginTop: 150,
    },
    themeToggle: {
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

// LIGHT THEME
const styles_light = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        color: '#000',
        backgroundColor: '#fff',
        marginTop: 20,
    },
    themeToggle: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 6,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
    },
});


const lightStyles=StyleSheet.create({

});

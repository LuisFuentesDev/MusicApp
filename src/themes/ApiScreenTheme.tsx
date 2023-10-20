import { StyleSheet } from "react-native";

export const apiScreenStyles = StyleSheet.create({
    aboutBottom: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 8,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '4a6eb0'
    },
    artistContainer: {
        backgroundColor: '#4a6eb0',
        borderRadius: 8,
        marginVertical: 8,
        padding: 16,
        width: '80%',
        alignSelf: 'flex-end',
    },
    artistInfo: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color:'white'
    },
    aboutBottomText: {
        color: 'white',
        fontSize: 16,
    }
});
import React from "react";
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from "react-native";
import { Feather} from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header( {name} ){
    return(
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.username}>{name}</Text>
            <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Feather name="user" size={27} color="#fff"/>
            </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    username:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonUser:{
        with: 44,
        heith: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
    }
})
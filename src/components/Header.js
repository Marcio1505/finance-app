import React from "react";
import { 
    View,
    StyleSheet,
    Text,
    StatusBar
} from "react-native";
import {} from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header(){
    return(
        <View style={styles.container}>
          <view style={styles.content}>
            <text>Marcio Jr</text>
          </view>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
    },
})
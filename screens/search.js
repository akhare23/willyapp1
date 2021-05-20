import * as React from "react";
import {TextInput, StyleSheet, TouchableOpacity, Text, View} from "react-native"

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Search Screen</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    textinput:{
        borderColor:"blue",
        width:30,
        height:30
    },
    container:{
        alignContent:"center",
        alignSelf:"center",
        alignItems:"center"
    }
})
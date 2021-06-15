import React from 'react'
import { View,TextInput,StyleSheet,Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color="orange" style={{marginRight:10}} />}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#e9ecef",
        borderRadius:25,
        flexDirection:"row",
        padding:15,
        marginVertical:10
    },
    textInput:{
        fontSize:18,
        color:"#0c0c0c",
        fontFamily: Platform.OS==="android" ? "Roboto" : "Avenir",
    }
})
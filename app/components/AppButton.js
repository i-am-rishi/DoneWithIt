import React from 'react'
import { Text, TouchableOpacity,StyleSheet } from 'react-native'

export default function AppButton({title,onPress,style}) {
    return (
        <TouchableOpacity style={[styles.TouOpa,style]} onPress={onPress}>
            <Text style={styles.Atext}>{title}</Text>
        </TouchableOpacity>
    )

    
}
const styles = StyleSheet.create({
    TouOpa:{
        width:"100%", 
        height:60,
        marginTop:10,
        borderRadius:50,
        marginVertical:10,
        backgroundColor:"tomato",
        justifyContent:"center",
        alignItems:"center"
    },
    Atext:{
        color:"white",
        fontSize:25,
        fontWeight:"bold"
    }
})
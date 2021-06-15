import React from 'react'
import { Text,StyleSheet} from 'react-native';

export default function AppText({children,style}) {
    return (
        <Text style={[styles.container,style]}>{children}</Text>
    )
}



const styles = StyleSheet.create({
    container:{
        color:"tomato",
        fontSize:20,
        fontFamily:"Avenir"
}
})

import React from 'react'
import { View,StyleSheet, Image, TouchableOpacity} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CloseDelete() {
    return (
        <View style={styles.container}>
            <View style={styles.icons}>
                <TouchableOpacity><MaterialCommunityIcons style={styles.close} size={30} name="close"/></TouchableOpacity>
                <TouchableOpacity><MaterialCommunityIcons style={styles.delete} size={30} name="delete"/></TouchableOpacity>
            </View>
            <Image style={styles.image} source={require("../assets/image.jpg")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    close:{
        position:"absolute",
        top:40,
        left:30,
        color:"red"
    },
    delete:{
        position:"absolute",
        top:40,
        right:30,
        color:"dodgerblue"
    },
    image:{
        width:"100%",
        height:"70%",
        marginTop:"40%"
    }
})
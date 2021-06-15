import React from 'react'
import { View,Image,StyleSheet, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import AppText from './AppText';

export default function AppList({title,subTitle,image,IconComponent,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={"#f8f9fa"} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={require("../assets/alwaysawake.png")}/>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:"white"
    },
    image:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:"orange",
    },
    title:{
        fontSize:20,
        color:"black"
    },
    subTitle:{
        color:"grey",
        fontSize:12
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:"center"
    }
})

import React from 'react'
import { TouchableWithoutFeedback,View,StyleSheet, Image } from 'react-native'

import AppText from './../components/AppText';

export default function AppCard({title,subtitle,image,titleColor,subColor,onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image}/>
                <View style={styles.detailsContainer}>
                 <AppText style={{fontSize:20,fontWeight:"bold",color:titleColor}}>{title}</AppText>
                 <AppText style={{fontSize:15,color:subColor}}>{subtitle}</AppText>
                </View>
            </View>
       </TouchableWithoutFeedback>
    ) 
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:"#fff",
        marginBottom:20,
        overflow:"hidden"
    },
    image:{
        width:"100%",
        height:200,
    },
    detailsContainer:{
        padding:20
    }
})
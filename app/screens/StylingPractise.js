import React from 'react'
import { Text, View } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';


export default function StylingPractise() {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <MaterialCommunityIcons name="email" size={60} color="tomato"/>
            <AppText>Hi Rishi</AppText>
            <AppText>Namaste Azamgarh</AppText>
            <AppText>I'm loving React Native</AppText>
            <AppButton title="LogIn" color="dodgerblue" onPress={()=>console.log("Tapped LogIn")}/>
            <AppButton title="Register" color="tomato" onPress={()=>console.log("Tapped Register")}/>
        </View>
    )
}

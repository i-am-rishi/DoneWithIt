import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

import AppCard from './../components/AppCard';


export default function PractiseCard() {
    return (
        <View style={styles.card}>
            <AppCard title="Red Jacket" subtitle="Rs 700" image={require("../assets/image.jpg")}></AppCard>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        flex:1,
        backgroundColor:"#f8f4f4",
        padding:20,
        paddingTop:100,
    }
})
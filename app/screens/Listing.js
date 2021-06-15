import React from 'react'
import { Image, View,StyleSheet,Text } from 'react-native'
import AppText from './../components/AppText';

export default function Listing({route}) {

    const listing=route.params;
    

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={listing.image}/>
            <View style={styles.contents}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>Rs {listing.price}</AppText>
            </View>
            <View style={styles.details}>
                <Image style={styles.detailsImg} source={require("../assets/alwaysawake.png")} />
                <View>
                    <Text style={styles.containerTitle}>Always Awake</Text>
                    <Text style={styles.containerSubTitle}>Added 10 minutes ago</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width:"100%",
        height:"40%"
    },
    contents:{
        marginLeft:10,
        marginVertical:10,
    },
    title:{
        color:"tomato",
        fontSize:24,
        fontWeight:"bold"
    },
    price:{
        color:"dodgerblue",
        marginVertical:10
    },
    details:{
        flexDirection:"row",
        alignItems:"center",
    },
    detailsImg:{
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:"orange",
        marginHorizontal:20
    },
    containerTitle:{
        fontSize:25
    },
    containerSubTitle:{
        color:"grey"
    }
})
import React from 'react';
import {Image,Text, ImageBackground,StyleSheet,View } from 'react-native';
import AppButton from './../components/AppButton';

function WelcomeScreen({navigation}) {
    return (
   
       <ImageBackground blurRadius={10} style={styles.background} source={require("../assets/splash.png")}>
           <View style={styles.logoContainer}>
            <Image resizeMode="contain" style={styles.logo}  source={require("../assets/alwaysawake.png")}/>
            <Text style={[styles.tagLine,{color:"grey"}]}>Sell What You Don't Need</Text>
           </View>
                <AppButton title="LogIn" color="dodgerblue" onPress={()=>navigation.navigate("LogIn")}/>
                <AppButton title="Register" color="tomato" onPress={()=>console.log("Tapped Register")}/>
       </ImageBackground>
       
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    logo:{
        // width:300,
        // height:70,
        width:300,
        height:150
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center"
    },
    tagLine:{
        fontSize:20,
        fontWeight:"600"
    }
})


export default WelcomeScreen;
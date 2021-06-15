import React,{useState,useEffect} from 'react';
import {Switch,Button,Image,Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import StylingPractise from './app/screens/StylingPractise';
import WelcomeScreen from './app/screens/WelcomeScreen';
import PractiseCard from './app/screens/PractiseCard';
import Listing from './app/screens/Listing';
import CloseDelete from './app/screens/CloseDelete';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingComponents from './app/screens/ListingComponents';
import TestingInput from './app/screens/TestingInput';
import Picker from './app/screens/Picker';
import LogInScreen from './app/screens/LogInScreen';
import AppScreen from './app/components/AppScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {

  const [isNew,setIsNew]=useState(false);
  const [imageUri,setImageUri]=useState()

// ------------------------------------------------------------- Test 1 Image Picker --------------------------------------------------

  // const requestPermission= async ()=>{
  //   const {granted}=await ImagePicker.requestCameraRollPermissionsAsync();
  //   if(!granted){
  //     alert("You need to grant permission to access the library.");
  //   }
  // }

  // useEffect(()=>{
  //   requestPermission();
  // },[]);


  // --------------------------------------------------------- Test 2 Navigation Testing -----------------------------------------------------



//   const Tweets =({navigation})=>(
//     <AppScreen>
//         <Text>Tweet</Text>
//         <Button title="View Tweet" onPress={()=>navigation.navigate('TweetDetails',{id:1})}/>
//     </AppScreen>
//   )

//   const TweetDetails=({route})=>(
//   <AppScreen>
//       <Text>Tweet Details {route.params.id}</Text>
//   </AppScreen>
// )


// const Account=()=>(<AppScreen><Text>This is your Account.</Text></AppScreen>)


//   const Stack=createStackNavigator();
//   const StackNavigator=()=>(
//     <Stack.Navigator initialRouteName="Tweets" screenOptions={{headerStyle:{backgroundColor:"tomato"},headerTintColor:"white"}}>
//         {/* <Stack.Screen name="TweetDetails" component={TweetDetails} options={({route})=>({title:route.params.id})}/> */}
//         <Stack.Screen name="TweetDetails" component={TweetDetails}/>
//         <Stack.Screen name="Tweets" component={Tweets} options={{headerStyle:{backgroundColor:"dodgerblue"}}}/>
//     </Stack.Navigator>
//   )
  


//   const Tab=createBottomTabNavigator();

//   const TabNavigator=()=>{
//     return (
//       <Tab.Navigator tabBarOptions={{activeBackgroundColor:"tomato",activeTintColor:"white",inactiveBackgroundColor:"#eee",inactiveTintColor:"black",labelStyle:{paddingBottom:10,fontSize:15,flexDirection:"row"}}}>
//         <Tab.Screen name="Feed" options={{tabBarIcon:({size,color})=><FontAwesome size={size} color={color} name="home"/>}} component={StackNavigator}/>
//         <Tab.Screen name="Account" component={Account}/>
//       </Tab.Navigator>
//     )
//   }








  return (
        // <Switch value={isNew} style={{marginTop:50}} onValueChange={(newValue)=>setIsNew(newValue)} />
        // <WelcomeScreen/>
        // <PractiseCard/>
        // <StylingPractise/>
        // <Listing/>
        // <CloseDelete/>
        // <MessagesScreen/>
        // <AccountScreen/>
        // <ListingComponents/>
        // <TestingInput/>
        // <Picker/>
        // <LogInScreen/>

        <NavigationContainer theme={NavigationTheme}>
            {/* <AuthNavigator/> */}
            <AppNavigator/>
        </NavigationContainer>



        // <NavigationContainer >
        //     {/* <StackNavigator/> */}
        //     <TabNavigator/>
        // </NavigationContainer>



        // <AppScreen>
        //   <Button title="Select Camera" onPress={selectImage}></Button>
        //   <Image source={{uri:imageUri}} style={{width:200,height:200}}/>
        // </AppScreen>
  );
}


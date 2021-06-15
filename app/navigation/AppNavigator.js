import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Listing from '../screens/Listing';
import ListingComponents from './../screens/ListingComponents';
import AccountScreen from './../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';

const Tab=createBottomTabNavigator();

const AppNavigator=()=>(
    <Tab.Navigator tabBarOptions={{activeBackgroundColor:"tomato",inactiveTintColor:"black",labelStyle:{fontSize:15,paddingBottom:10,}}}>
        <Tab.Screen name="Feed" component={FeedNavigator}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
    </Tab.Navigator>
);

export default AppNavigator;
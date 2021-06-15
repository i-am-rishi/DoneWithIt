import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Listing from '../screens/Listing';
import ListingComponents from './../screens/ListingComponents';

const Stack=createStackNavigator();

const FeedNavigator=()=>(
    <Stack.Navigator mode="card" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Listings" component={ListingComponents} />
        <Stack.Screen name="ListingDetails" component={Listing} />
    </Stack.Navigator>
);

export default FeedNavigator;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './../screens/WelcomeScreen';
import LogInScreen from './../screens/LogInScreen';

const Stack=createStackNavigator();

const AuthNavigator=()=>(
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="LogIn" component={LogInScreen}/>
        {/* <Stack.Screen name="Register" component={RegisterScreen}/> */}
    </Stack.Navigator>
)

export default AuthNavigator;
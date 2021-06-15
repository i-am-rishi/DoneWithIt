import React,{useState} from 'react'
import { Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'
import AppScreen from '../components/AppScreen'
import AppTextInput from '../components/AppTextInput';

export default function TestingInput() {
const[firstName,setfirstName]=useState('');

    return (
        <AppScreen>
            <AppTextInput placeholder="Email" icon="email"/>
        </AppScreen>
    )
}

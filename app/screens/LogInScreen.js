import React from 'react'
import {Image, StyleSheet} from 'react-native'
import {Formik} from 'formik';
import * as Yup from 'yup';


import AppFormField from './../components/AppFormField';
import AppScreen from '../components/AppScreen';
import AppForm from '../components/AppForm';
import AppText from '../components/AppText';
import AppTextInput from './../components/AppTextInput';
import ErrorMessage from './../components/ErrorMessage';
import SubmitButton from '../components/SubmitButton';

const validationSchema=Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
})
export default function LogInScreen() {

    return (
       <AppScreen style={styles.container}>
           <Image style={styles.logo} source={require("../assets/alwaysawake.png")}/>

            <AppForm
                initialValues={{email:'',password:''}}
                onSubmit={values=>console.log(values)}
                validationSchema={validationSchema}
            >
              <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            name="email"
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="password"
                            secureTextEntry
                            placeholder="Password"
                            textContentType="password"
                        />
                        <SubmitButton title="Log In"/>
            </AppForm>

           
       </AppScreen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    logo:{
        width:250,
        height:100,
        alignSelf:"center",
        marginTop:50,
        marginBottom:50 
    }
})
import React,{useState} from 'react'


import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';
import AppScreen from './../components/AppScreen';


const categories=[
    {
        label:"Furniture",
        value:1
    },
    {
        label:"Clothing",
        value:2
    },
    {
        label:"Camera",
        value:3
    },
]

export default function Picker() {

    const[category,setCategory]=useState(categories[0]);

    return (
        <AppScreen>
                <AppPicker
                    selectedItem={category}
                    onSelectItem={item=>setCategory(item)} 
                    items={categories} 
                    icon="apps" 
                    placeholder="Category"
                />
                <AppTextInput icon="email" placeholder="Email"/>
        </AppScreen>
    )
}

import React from 'react'
import { Text,FlatList,StyleSheet } from 'react-native';
import AppCard from '../components/AppCard';

import AppScreen from './../components/AppScreen';
import Listing from './Listing';


const listings=[
    {
        id:1,
        title:"Red Jackets For Sale",
        price:"100",
        image:require("../assets/girlimage.jpg")
    },
    {
        id:2,
        title:"Couch",
        price:"300",
        image:require("../assets/image.jpg")
    },
    {
        id:3,
        title:"Baby Clothes",
        price:"500",
        image:require("../assets/babysleeping.jpg")
    },
]

export default function ListingComponents({navigation}) {
    return (
        <AppScreen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listings=>listings.id.toString()} 
                renderItem={({item})=>
                    <AppCard 
                        title={item.title}
                        subtitle={"Rs " + item.price}
                        image={item.image}
                        onPress={()=>navigation.navigate("ListingDetails",item)}
                        titleColor="black"
                        subColor="orange"
                    />
                }
            />
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding:10,
        backgroundColor:"#f8f9fa"
    }
})
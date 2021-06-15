import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import AppScreen from './../components/AppScreen';
import Icon from './../components/Icon';
import AppList from './../components/AppList';
import ListItemSeparator from './ListItemSeparator';


const menuItems=[
    {
        title:"My Listings",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:"red"
        }
    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor:"green"
        }
    },
];

export default function AccountScreen() {
    return (
        <AppScreen style={styles.screen}>
            <View style={styles.container}>
                <AppList
                title="Rishabh Kumar Srivastava"
                subTitle="Admin - rishabhsrivastava39142@gmail.com"
                image={require("../assets/splash.png")}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItems)=>menuItems.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item})=>
                        <AppList 
                            title={item.title}
                            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
                        />
                        }
                />
            </View>
            
            <AppList
                title={"Log Out"}
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}
            />

        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:10
    },
    screen:{
        backgroundColor:"#e9ecef",
    }
})
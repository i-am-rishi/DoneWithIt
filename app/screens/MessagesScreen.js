import React,{useState}  from 'react'
import { FlatList, View, StyleSheet, Platform} from 'react-native'

import AppList from './../components/AppList';
import AppScreen from './../components/AppScreen';
import ListItemSeparator from './ListItemSeparator';
import ListItemsDeleteAction from './../components/ListItemsDeleteAction';


const initialMessages=[
    {
        id:1,
        title:"T1",
        description:"D1",
        image:require("../assets/image.jpg")        
    },
    {
        id:2,
        title:"T2",
        description:"D2",
        image:require("../assets/image.jpg")        
    },
];

export default function MessagesScreen() {

    const [messages,setMessages]=useState(initialMessages);
    const [refreshing,setRefreshing]=useState(false);

    const handleDelete= message =>{
        setMessages(messages.filter(e=>e.id!==message.id));
    }


    return (
        <AppScreen>
            <FlatList
            data={messages}
            keyExtractor={messages=>messages.id.toString()}
            renderItem={({item})=><AppList 
                                        title={item.title} 
                                        subTitle={item.description} 
                                        image={item.image} 
                                        onPress={()=>console.log("selected",item)}
                                        renderRightActions={()=><ListItemsDeleteAction onPress={()=>handleDelete(item)}/>}
                                        />}
            ItemSeparatorComponent={()=><ListItemSeparator/>}
            refreshing={refreshing}
            onRefresh={()=>{setMessages([
                {
                    id:2,
                    title:"T2",
                    description:"D2",
                    image:require("../assets/image.jpg")        
                },
            ])}}
            />
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    
})
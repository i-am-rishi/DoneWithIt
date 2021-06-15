import React,{useState} from 'react'
import { View,TextInput,StyleSheet,Platform,Button, TouchableNativeFeedback, Modal, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import AppText from './AppText';
import ItemPicker from './ItemPicker';


export default function AppPicker({icon,items,onSelectItem,selectedItem,placeholder}) {
    const [modalVisible,setModalVisible]=useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={25} color="orange" style={{marginRight:10}} />}
                    <AppText style={styles.text}>{selectedItem? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons 
                        name="chevron-down" 
                        size={25} 
                        color="orange" 
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Button title="Close" onPress={()=>setModalVisible(false)}/>
                <FlatList 
                data={items}
                keyExtractor={items=>items.value.toString()}
                renderItem={({item})=>(<ItemPicker label={item.label} onPress={()=>{setModalVisible(false);onSelectItem(item)}}/>)}
                />
            </Modal>
        </>
    ) 
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#e9ecef",
        borderRadius:25,
        flexDirection:"row",
        padding:15,
        marginVertical:10
    },
    textInput:{
        fontSize:18,
        color:"#0c0c0c",
        fontFamily: Platform.OS==="android" ? "Roboto" : "Avenir"
    },
    text:{
        flex:1,
        color:"black"
    }
})
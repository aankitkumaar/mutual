import React from "react";
import {Text, StyleSheet, View,FlatList} from 'react-native';


const ListScreen = () =>
{
    const newList = [
        {name: "Friend8", age: 20,color:'Black'},
        {name: "Friend7", age: 20,color:'red'},
        {name: "Friend6", age: 20,color:'pink'},
        {name: "Friend5", age: 20,color:'green'},
        {name: "Friend4", age: 20,color:'yellow'},
        {name: "Friend3", age: 20,color:'blue'},
        {name: "Friend2", age: 20,color:'orange'}
    ];

    return(
    <FlatList 
    horizontal = {true} 
    keyExtractor = {(newList)=> newList.name} //for give specific data trited as key of above list
    data={newList}
    renderItem={({item})=>{
        return(
        <Text style = {{backgroundColor: item.color, fontSize : 40}}>{item.name}</Text>
        );
    }
    }
    />
    );
};

const style = StyleSheet.create({
    ListScreen :{
        backgroundColor: 'green',
        fontSize: 50
    }
})

export default ListScreen;
import React from "react";
import {Text, StyleSheet, View,FlatList,ScrollView, Button,TouchableOpacity} from 'react-native';


const ListScreen = (props) =>
{
    // console.log(props)
    const newList = [
        {name: "Friend8", age: 20, color:'Black', file1: 'fileA1.txt', file2: 'fileB1.txt',},
        {name: "Friend7", age: 20, color:'red', file1: 'fileA2.txt', file2: 'fileB2.txt'},
        {name: "Friend6", age: 20, color:'pink', file1: 'fileA3.txt', file2: 'fileB3.txt'},
        {name: "Friend5", age: 20, color:'green', file1: 'fileA4.txt', file2: 'fileB4.txt'},
        {name: "Friend4", age: 20, color:'yellow', file1: 'fileA5.txt', file2: 'fileB5.txt'},
        {name: "Friend3", age: 20, color:'blue', file1: 'fileA6.txt', file2: 'fileB6.txt'},
        {name: "Friend2", age: 20, color:'orange', file1: 'fileA7.txt', file2: 'fileB7.txt'},
        {name: "Friend8", age: 20, color:'Black', file1: 'fileA8.txt', file2: 'fileB8.txt'},
        {name: "Friend7", age: 20, color:'red', file1: 'fileA9.txt', file2: 'fileB9.txt'},
        {name: "Friend6", age: 20, color:'pink', file1: 'fileA10.txt', file2: 'fileB10.txt'},
        {name: "Friend5", age: 20, color:'green', file1: 'fileA11.txt', file2: 'fileB11.txt'},
        {name: "Friend4", age: 20, color:'yellow', file1: 'fileA12.txt', file2: 'fileB12.txt'}
    ];
    

    return(

        <View>
            <Text>Now time to learn how to change one component  to another component wy using Button</Text>
            <Button 
               onPress = {()=>{
                console.log("Button Pressed")
                props.navigation.navigate('Home')
               }}
               title = "Go to Home Screen"
            />
            <TouchableOpacity
            onPress = {() => console.log("Click on Touchable Opacity Button")}
            >
                <Text>Go to ComponentsScreen</Text>
                <Text>Go to ComponentsScreen</Text>
                <Text>Go to ComponentsScreen</Text>
                <Text>Go to ComponentsScreen</Text>
                <Text>Go to ComponentsScreen</Text>
                <Text>Go to ComponentsScreen</Text>
            </TouchableOpacity>
        </View>
    // <FlatList 
    // horizontal = {true} 
    // // showHorizontalScrollIndicator = {false}
    // keyExtractor = {(newList)=> newList.file1} //for give specific data tried as key of above list
    // data={newList}
    // renderItem={({item})=>{
    //     return(
    //         <View>
    //      <Text style = {{backgroundColor: item.color, fontSize : 30}}>{item.name}</Text>
    //     {/* {item.name} */}
    //     </View>
    //     );
    // }
    // }
    // />
    );
};

const style = StyleSheet.create({
    ListScreen :{
        backgroundColor: 'green',
        fontSize: 30
    }
})

export default ListScreen;
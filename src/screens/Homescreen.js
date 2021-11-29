import React,{useContext} from 'react';
import {Text,View,Button,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext2';
import {Feather} from '@expo/vector-icons';
const Homescreen=({navigation})=>{
    const {state,deleteBlogposts}=useContext(Context);
    return(
        <>
        <View style={{flex:1,paddingTop:2}}>
        <FlatList data={state} keyExtractor={(Blogposts)=>`${Blogposts.id}`} renderItem={({item})=>{
            return(
                <TouchableOpacity onPress={()=>navigation.navigate("Showscreen",{id:item.id})}>
                <View style={styles.row}>
                <Text style={{fontSize:20,left:0,marginLeft:5}}>{item.title}-{item.id}</Text>
                <TouchableOpacity onPress={()=>deleteBlogposts(item.id)}>
                <Feather name="trash" size={25}></Feather>
                </TouchableOpacity>
                </View>
                </TouchableOpacity>
            )
        }}/>
        </View>
        </>
    );
};
Homescreen.navigationOptions=({navigation})=>{
    return{ 
        headerRight:()=><TouchableOpacity onPress={()=>navigation.navigate('Create')}>
        <Feather name="plus"size={30} style={{marginRight:5}}></Feather>
        </TouchableOpacity>
    }
}
const styles=StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:5,
        paddingVertical:2,
        borderWidth:2,
        borderColor:'black',
        margin:3,
        marginTop:5,
        borderRadius:2
    },
});
export default Homescreen;
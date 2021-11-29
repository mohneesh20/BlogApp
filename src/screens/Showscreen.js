import React,{useContext} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext2';
import {EvilIcons} from '@expo/vector-icons';
const Showscreen=({navigation})=>{
    const id=navigation.getParam("id");
    const {state}=useContext(Context);
    const BlogPost=state.find((BlogPost)=>BlogPost.id===id);
    // console.log(JSON.stringify(BlogPost));  
    return(
        <>
        <View>
            <Text style={styles.title}>{BlogPost.title}</Text>
            <Text >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{BlogPost.content}</Text>
        </View>
        </>
    );
};
const styles=StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:40.0,
        alignSelf:'center',
        margin:20,
        marginBottom:80,
        textDecorationLine:'underline',
    }
})
Showscreen.navigationOptions=({navigation})=>{
    return{
        headerRight:()=><TouchableOpacity onPress={()=>navigation.navigate("Edit",{id:navigation.getParam("id")})}>
            <EvilIcons name='pencil' size={40} style={{margin:5}}></EvilIcons>
        </TouchableOpacity>
    }
}
export default Showscreen;
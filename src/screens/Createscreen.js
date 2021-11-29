import React,{useContext,useState} from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import {Context} from '../context/BlogContext2';
const Createscreen=({navigation})=>{  
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("")
    const {addBlogposts}=useContext(Context);
    return(
        <>
        <View>
            <Text style={styles.title1}>BLOG INFO</Text>
            <Text style={styles.title}>BLOG TITLE</Text>
            <TextInput value={title} onChangeText={(text)=>settitle(text)} style={styles.input}/>
            <Text style={styles.title}>BLOG CONTENT</Text>
            <TextInput value={content} onChangeText={(text)=>setcontent(text)} style={styles.input}/>
            <View style={{marginTop:10,marginHorizontal:5}}>
            <Button title="ADD POST" onPress={()=>addBlogposts(title,content,()=>{
                navigation.navigate("Home");
            })}/>
            </View>
        </View>
        </>
    );
};
const styles=StyleSheet.create({
    title1:{
        fontWeight:'bold',
        fontSize:40.0,
        marginBottom:80,
    },
    title:{
        fontWeight:'bold',
        fontSize:20.0,
        margin:10,
    },
    input:{
        borderColor:'black',
        borderWidth:1,
        margin:5,
        borderRadius:3,
        paddingHorizontal:5,
        height:40
    }
})
export default Createscreen;
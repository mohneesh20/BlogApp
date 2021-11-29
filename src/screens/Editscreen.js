import React,{useContext,useState,useEffect} from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import {Context} from '../context/BlogContext2';
const Editscreen=({navigation})=>{  
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("")
    const {state,editBlogposts}=useContext(Context);
    const id=navigation.getParam("id");
    const BlogPost=state.find((BlogPost)=>BlogPost.id===id);
    useEffect(() => {
        settitle(BlogPost.title);
        setcontent(BlogPost.content);
    }, [])
    
    return(
        <>
        <View>
            <Text style={styles.title1}>EDIT BLOG</Text>
            <Text style={styles.title}>BLOG TITLE</Text>
            <TextInput value={title} onChangeText={(text)=>{settitle(text)}} style={styles.input}/>
            <Text style={styles.title}>BLOG CONTENT</Text>
            <TextInput value={content} onChangeText={(text)=>setcontent(text)} style={styles.input}/>
            <View style={{marginTop:10,marginHorizontal:5}}>
            <Button title="EDIT POST" onPress={()=>editBlogposts(id,title,content,()=>{
                navigation.pop();
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
export default Editscreen;
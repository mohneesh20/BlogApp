import createContext from './createContext';
import jsonserver from '../api/jsonserver';
const BlogReducer=(state,action)=>{
    switch (action.type) {
        case "edit_Blog":
            return state.map((BlogPost)=>{
                if(BlogPost.id===action.payload.id){
                    return action.payload;
                }
                else{
                    return BlogPost;
                }
            });
        case "delete_Blog":
            return state.filter((Blogpost)=>(Blogpost.id)!==action.payload);
        case "add_Blog":
            return([...state,
                {
                    id:Math.floor(Math.random()*9999),
                    title:`${action.payload.title}`,
                    content:`${action.payload.content}`
                }])    
        default:
            return(state);
    }
};
const addBlogposts=(dispatch)=>{
    return (title,content,callback)=>{
        dispatch({type:"add_Blog",payload:{title,content}});
        callback();
    }
};
const deleteBlogposts=dispatch=>{
    return (id)=>{
        dispatch({type:"delete_Blog",payload:id});
    }
};
const editBlogposts=dispatch=>{
    return (id,title,content,callback)=>{
        dispatch({type:"edit_Blog",payload:{id:id,title:title,content:content}});
        callback();
    }
};
export const {Context,Provider}=createContext(BlogReducer,{addBlogposts,deleteBlogposts,editBlogposts},[]);
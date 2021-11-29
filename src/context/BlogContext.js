import React,{useState,useReducer} from 'react';
// import createContext from './createContext'
const BlogContext=React.createContext();
export const BlogProvider=({children})=>{
    // const [Blogposts, setBlogposts] = useState([]);
    const BlogReducer=(state,action)=>{
        switch (action.type) {
            case "add_Blog":
                return([...state,{title:`Blog ${state.length+1}`}])
             default:
                 return(state);
        }
    }
    const [Blogposts, dispatch] = useReducer(BlogReducer,[]);
    const addBlogposts=()=>{
        dispatch({type:"add_Blog"});
        // setBlogposts([...Blogposts,{title:`BLOGPOST ${Blogposts.length+1}`}])
    }
    return(
        <BlogContext.Provider value={{data:Blogposts,addBlogposts}}>
            {children}
        </BlogContext.Provider>
    )
}
export default BlogContext;
// export const {Context,Provider}=createContext(BlogReducer,{addBlogposts},[]);
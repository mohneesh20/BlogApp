import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';  
import {createAppContainer} from 'react-navigation';
import Homescreen from './src/screens/Homescreen';
import Showscreen from './src/screens/Showscreen';
import Createscreen from './src/screens/Createscreen';
import Editscreen from './src/screens/Editscreen';
import {Provider} from './src/context/BlogContext2';
const navigator=createStackNavigator({
  Home:Homescreen,
  Showscreen:Showscreen,
  Create:Createscreen,
  Edit:Editscreen
},
{
  initialRouteName:"Home",
  defaultNavigationOptions:{
    title:"BLOGS",
  }
});
const App= createAppContainer(navigator);
export default ()=>{
  return(
    <Provider>
      <App/>
   </Provider>
  )
}
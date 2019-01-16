import React from 'react';
import {createStackNavigator, createAppContainer } from "react-navigation";
import PictureList from "./components/PictureList";
import PicturePreview from "./components/PicturePreview";
export default class App extends React.Component {
   render() {
       return (
           <Tada/>
       );
   }
}
//Customize the header_
const NavigationOptions = {
   headerTintColor: '#fff',
   headerStyle: {
       backgroundColor: '#f4511e',
   }
};
//Create the router.
const Router = createStackNavigator({
       //Name the screen
       'PictureList': {
           //Link the Component
           screen: PictureList,
           //Additional navigation options
           navigationOptions: {
               title: '/r/pics Browser',
               ...NavigationOptions
           }
       },
       'PicturePreview': {
           screen: PicturePreview,
           navigationOptions: NavigationOptions
       }
   }, {
       //Root
       initialRouterName: 'PictureList'
   }
);

const Tada = createAppContainer(Router);
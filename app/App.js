import React from 'react';
import {createStackNavigator, createAppContainer } from "react-navigation";
import RecycleTestComponent from "./components/RecycleTestComponent";
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
       'RNPrintExample': {
           //Link the Component
           screen: RecycleTestComponent,
           //Additional navigation options
           navigationOptions: {
               title: 'RNPrintExample',
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
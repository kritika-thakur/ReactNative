import React from 'react';
import {
   ActivityIndicator, FlatList,
   Image, Text, TouchableHighlight, View
} from "react-native";
import CardView from "../common/CardView";
import data from '../mocks/data.json';
export default class PictureList extends React.Component {
   state = {loading: true, error: null, posts: null, index: 0};
   componentDidMount() {
        this.setState({
            posts: data,
            loading: false
        })
   }
   render() {
       return (
           <View style={{flex: 1, justifyContent: 'center'}}>{this.state.posts &&
               <FlatList data={this.state.posts}
                         renderItem={this.renderItem.bind(this)}
                         keyExtractor={(item) => (item.id + '')}
                         getItemLayout={(data, index) => (
                            {length: 10, index}
                          )}/>}{this.state.loading &&
               <ActivityIndicator size="large" color="#f4511e"/>}</View>
       );
   }
   navigateToPicture(name, image) {
       this.props.navigation.navigate('PicturePreview', {
           'name': name,
           'image': image
       })
   }
   renderItem(item) {
       console.log(item);
       return (
       <TouchableHighlight>
               <CardView>
                   <Image style={{height: 150}}
                          source={{uri: item.item.image}}/>
                   <Text style={{padding: 5}}>{item.item.name}</Text>
                   <Text style={{padding: 5}}>{item.item.index}</Text>
               </CardView></TouchableHighlight>
       )
   }
}
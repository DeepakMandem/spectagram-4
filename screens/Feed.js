import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default class Feed extends React.Component{


renderItem = ({ item: post}) => {
    return<PostCard post={post} navigation={this.props.navigation} />;
}
    render(){
        return(
            <View>
                <Text> Feed Screen </Text>
                <Viev>
                    <TouchableOpacity onPress={this.props.navigations.navigate}>

                    </TouchableOpacity>
                </Viev>
            </View>
        )
    }
}
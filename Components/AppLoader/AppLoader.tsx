import React, { Component } from 'react';
import { View,Text, Spinner } from 'native-base';

export class AppLoader extends Component {
  render() {
    return (
      <View>
        <Text style={{textAlign: 'center',fontWeight:'bold'}}>Money Target</Text>
        <Spinner color='blue' />
      </View>
    );
  }
}
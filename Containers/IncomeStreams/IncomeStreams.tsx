import { Body, Button, Icon, Left, List, ListItem, Right, Text, View } from 'native-base';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IncomeStreamsList } from './IncomeStreamsList';
import { CreateIncomeStream } from './CreateIncomeStream';

const IncomeStreamsStack = createStackNavigator();

export const IncomeStreams = () => {
  return <IncomeStreamsStack.Navigator initialRouteName="Income Streams List">
    <IncomeStreamsStack.Screen 
      name="Income Streams List" 
      component={IncomeStreamsList} 
      options={({ navigation, route }) => ({
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('Create Income Stream')}
            color="#fff"
            transparent
          ><Icon name='md-add-outline' /></Button>
        )
      })}
      />
    <IncomeStreamsStack.Screen name="Create Income Stream" component={CreateIncomeStream} />
  </IncomeStreamsStack.Navigator>
}

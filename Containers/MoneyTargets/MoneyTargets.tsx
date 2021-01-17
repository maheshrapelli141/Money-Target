import { Button, Icon, Text, View } from 'native-base';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MoneyTargetsList } from './MoneyTargetsList';
import { CreateMoneyTarget } from './CreateMoneyTarget';

const MoneyTargetsStack = createStackNavigator();
export const MoneyTargets = () => {
  return <MoneyTargetsStack.Navigator initialRouteName="Money Targets List">
  <MoneyTargetsStack.Screen 
    name="Money Targets List" 
    component={MoneyTargetsList} 
    options={({ navigation, route }) => ({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('Create Money Target')}
          color="#fff"
          transparent
        ><Icon name='md-add-outline' /></Button>
      )
    })}
    />
  <MoneyTargetsStack.Screen name="Create Money Target" component={CreateMoneyTarget} />
</MoneyTargetsStack.Navigator>
}
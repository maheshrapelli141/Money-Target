import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { CreateCashflow } from './CreateCashflow';
import { CashflowsList } from './CashflowsList';
import { Button, Icon } from 'native-base';

const CashflowStreamsStack = createStackNavigator();

export const Cashflow = ()=> {
  return <CashflowStreamsStack.Navigator initialRouteName="Cashflow List">
    <CashflowStreamsStack.Screen 
      name="Cashflow List" 
      component={CashflowsList} 
      options={({ navigation, route }) => ({
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('Create Cashflow')}
            color="#fff"
            transparent
          ><Icon name='md-add-outline' /></Button>
        )
      })}
      />
    <CashflowStreamsStack.Screen name="Create Cashflow" component={CreateCashflow} />
  </CashflowStreamsStack.Navigator>
}
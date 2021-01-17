import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { CreateCashflow } from './CreateCashflow';

const CashflowStreamsStack = createStackNavigator();

export const Cashflow = ()=> {
  return <CashflowStreamsStack.Navigator initialRouteName="Create Cashflow">
    <CashflowStreamsStack.Screen name="Create Cashflow" component={CreateCashflow} />
  </CashflowStreamsStack.Navigator>
}
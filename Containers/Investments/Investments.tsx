import { Button, Icon, Text, View } from 'native-base';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { InvestmentsList } from './InvestmentsList';
import { CreateInvestment } from './CreateInvestment';

const InvestmentsStack = createStackNavigator();

export const Investments = () => {
  return <InvestmentsStack.Navigator initialRouteName="Investments List">
    <InvestmentsStack.Screen 
      name="Investments List" 
      component={InvestmentsList} 
      options={({ navigation, route }) => ({
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('Create Investment')}
            color="#fff"
            transparent
          ><Icon name='md-add-outline' /></Button>
        )
      })}
      />
    <InvestmentsStack.Screen name="Create Investment" component={CreateInvestment} />
  </InvestmentsStack.Navigator>
}
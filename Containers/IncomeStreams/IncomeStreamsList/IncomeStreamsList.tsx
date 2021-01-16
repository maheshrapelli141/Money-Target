import { Body, Icon, Left, List, ListItem, Right, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Basis } from '../../../Services/lib';

const incomeStreams = [
  {
    name: 'Salary',
    amount: 25000,
    basis: Basis.MONTHLY
  }
]

export const IncomeStreamsList = () => {
  return <View>
     <List>
       {
         incomeStreams.map(stream => 
          <ListItem>
            <Left>
              <Text>{stream.name}</Text>
            </Left>
            <Body>
              <Text style={style.amountText}>Rs. {stream.amount}</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        )
       }
        
      </List>
  </View>
}

const style = StyleSheet.create({
  amountText: {
    // textAlign: 'right',
    right: 0
  }
})
import { Body, Button, Icon, Left, List, ListItem, SwipeRow, Text } from 'native-base';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import cashflowsService from '../../../Services/CashflowsService/cashflows.service';

export const CashflowsList = () => {
  return <ScrollView>
     <FlatList
      data={cashflowsService.cashflows}
      renderItem={({item}) => <SwipeRow
        rightOpenValue={-75}
        right={
          <Button danger onPress={() => {
            Alert.alert(
              "Confirm",
              `Are you sure to delete ${item.name}`,
              [
                { text: "Yes", onPress: () => cashflowsService.remove(item.name) }
              ],
              { cancelable: false }
            );
              
          }} >
            <Icon active name="trash" />
          </Button>
        }
        body={
          <>
            <Left>
              <Text style={style.itemName}>{item.name}</Text>
            </Left>
            <Body>
              <Text style={style.amountText}>Rs. {item.amount}</Text>
              {/* <Text style={style.amountText}>Basis: {item.basis}</Text> */}
            </Body>
          </>
        }
        />
      }
     
     >
      </FlatList>
  </ScrollView>
}

const style = StyleSheet.create({
  amountText: {
    // textAlign: 'right',
    right: 0
  },
  itemName: {
    marginLeft: 10
  }
})
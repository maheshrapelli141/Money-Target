import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

export const Home = () => {
  const navigation = useNavigation();

  return <View style={{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    }}>
    <Text>Select One</Text>
    <Button 
      bordered
      style={style.button}
      rounded
      block
      onPress={() => navigation.navigate('Income Streams')}
      >
      <Text>Income Streams</Text>
    </Button>
    <Button 
      bordered
      style={style.button}
      rounded
      block
      onPress={() => navigation.navigate('Money Targets')}
      >
      <Text>Money Targets</Text>
    </Button>
    <Button 
      bordered
      style={style.button}
      rounded
      block
      onPress={() => navigation.navigate('Investments')}
      >
      <Text>Investments</Text>
    </Button>
    <Button 
      bordered
      style={style.button}
      rounded
      block
      onPress={() => navigation.navigate('Cashflow')}
      >
      <Text>Cashflow</Text>
    </Button>
  </View>
}

const style = StyleSheet.create({
  button: {
    margin: 15
  }
})
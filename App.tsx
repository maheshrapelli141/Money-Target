import 'react-native-gesture-handler';
import React from 'react';
import { Button, Container, Icon, Root, Text, View } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoader } from './Components/AppLoader';
import GlobalContext from './Services/Context/GlobalContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './Containers/Home';
import { IncomeStreams } from './Containers/IncomeStreams';
import { MoneyTargets } from './Containers/MoneyTargets';
import { Investments } from './Containers/Investments';
import { Cashflow } from './Containers/Cashflow/Cashflow';

type Props = {}

type State = {
  isReady: boolean,
  data: any
};

const Stack = createStackNavigator();

export default class App extends React.Component<Props,State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isReady: false,
      data: {}
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      ...Ionicons.font,
    });
    setTimeout(() => {
      this.setState({ isReady: true });
    },2000);
    
  }

  setData(data: any){
    this.setState({ data });
  }

  render() {
    if (!this.state.isReady) {
      return <View style={{paddingTop: 100}}>
        <AppLoader />
      </View>;
    }

    return (
      <Root>
      <Container>
        <GlobalContext.Provider value={{data: this.state.data, setData: this.setData}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen 
              name="Income Streams" 
              component={IncomeStreams} 
              options={({ navigation, route }) => ({
                headerShown: false
              })}
            />
            <Stack.Screen 
              name="Money Targets" 
              component={MoneyTargets} 
              options={({ navigation, route }) => ({
                headerShown: false
              })}
            />
            <Stack.Screen 
              name="Investments" 
              component={Investments} 
              options={({ navigation, route }) => ({
                headerShown: false
              })}
            />
            <Stack.Screen 
              name="Cashflow" 
              component={Cashflow} 
              options={({ navigation, route }) => ({
                headerShown: false
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </GlobalContext.Provider>
      </Container>
      </Root>
    );
  }
}
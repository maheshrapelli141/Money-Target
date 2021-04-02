import { Button, Form, Icon, Input, Item, Picker, Text, Toast, View } from 'native-base';
import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import cashflowsService, { CashflowInterface } from '../../../Services/CashflowsService/cashflows.service';
import incomeStreamsService, { IncomeStreamInterface } from '../../../Services/IncomeStreamsService/income-streams.service';
import { InvestmentInterface } from '../../../Services/InvestmentsService/interfaces';
import investmentsService from '../../../Services/InvestmentsService/investments.service';
import { MoneyTargetInterface } from '../../../Services/MoneyTargetsService/interfaces';
import moneyTargetsService from '../../../Services/MoneyTargetsService/money-targets-service';

type Props = {};
type State = {
  moneyTarget: string;
  investment: string;
  incomeStream: string;
  incomeStreamsList: IncomeStreamInterface[];
  moneyTargetsList: MoneyTargetInterface[];
  investmentsList: InvestmentInterface[];
  name: string;
  amount: number;
  nameError: string | null;
  amountError: string | null;
  loading: boolean;
};

export class CreateCashflow extends React.Component<Props,State>{
  constructor(props: Props){
    super(props);
    this.state = {
      moneyTarget:'',
      investment:'',
      incomeStream:'',
      incomeStreamsList: [],
      moneyTargetsList: [],
      investmentsList: [],
      name:'',
      amount: 0,
      nameError:'',
      amountError:'',
      loading: false
    }
  }
  // const [moneyTarget,setMoneyTarget] = useState('');
  // const [investment,setInvestment] = useState('');
  // const [incomeStream,setIncomeStream] = useState('');
  // const [incomeStreamsList,setIncomeStreamList] = useState<IncomeStreamInterface[]>([]);
  // const [moneyTargetsList,setMoneyTargetsList] = useState<MoneyTargetInterface[]>([]);
  // const [investmentsList,setInvestmentsList] = useState<InvestmentInterface[]>([]);
  
  // const [name,setName] = useState('');
  // const [amount,setAmount] = useState('');
  // const [nameError,setNameError] = useState('');
  // const [amountError,setAmountError] = useState('');
  // const [loading,setLoading] = useState(false);

  // loadData();
  componentDidMount(){
    this.loadData();
  }

  async loadData(){
    const streams = await incomeStreamsService.getAll();
    const targets = await moneyTargetsService.getAll();
    const investments = await investmentsService.getAll();
    this.setState({
      incomeStreamsList: streams,
      moneyTargetsList: targets,
      investmentsList: investments
    })
  }

  validate(){
    const { name,amount } = this.state;
    let nameError = null,amountError = null;
    if(!name?.length) nameError = 'Please enter name of income';
    
    if(!amount || !isFinite(amount))
      amountError = 'Please enter amount';
    
      this.setState({
        nameError,amountError
      })

    return !nameError?.length && !amountError?.length;
  }

  async submit(){
    console.log('called');
    console.log('====',this.validate());
    
    if(this.validate()){
      await this.setState({ loading: true });

      const { name, amount, moneyTarget, incomeStream, investment } = this.state;

      const cashflow = {
        id: uuid.v1(),
        name,
        amount: Number(amount),
        acheived: [],
        deleted: false
      } as CashflowInterface;

      if(moneyTarget) cashflow.acheived.push(moneyTarget);
      if(incomeStream) cashflow.acheived.push(incomeStream);
      if(investment) cashflow.acheived.push(investment);

      await cashflowsService.add(cashflow);

      await this.setState({loading: false});

      Toast.show({
        text: 'Cashflow Added',
        duration: 1500
      })
    }
  }

  render(){
    const { name,nameError, amount,amountError,incomeStreamsList,moneyTargetsList,investmentsList,loading} = this.state;
    return <View>
      <Form>
        <Item floatingLabel error={nameError?.length !== 0}>
          <Input placeholder="Name" onChangeText={value => this.setState({ name: value })} value={name} disabled={loading}/>
          {nameError?.length ? <Icon name='close-circle' /> : null}
        </Item>
          {nameError ? <Text>{nameError}</Text> : null  }
        <Item floatingLabel error={amountError?.length !== 0}>
          <Input placeholder="Amount" keyboardType='number-pad' onChangeText={value => this.setState({ amount: Number(value) })} value={amount.toString()} disabled={loading}/>
          {amountError?.length ? <Icon name='close-circle' /> : null}
        </Item>
          {amountError ? <Text>{amountError}</Text> : null}
        <Item picker>
          <Picker
            style={{height: 50, width: 160,marginLeft: 10,marginTop: 15}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({
                incomeStream: itemValue
              })
              // //@ts-ignore
              // setIncomeStream(itemValue)
            }>
            {incomeStreamsList.map(target => 
              <Picker.Item label={target.name} value={target.id} />
              )}
          </Picker>
        </Item>
        <Item picker>
          <Picker
            style={{height: 50, width: 160,marginLeft: 10,marginTop: 15}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({
                moneyTarget: itemValue
              })
              // //@ts-ignore
              // setMoneyTarget(itemValue)
            }>
            {moneyTargetsList.map(target => 
              <Picker.Item label={target.name} value={target.id} />
              )}
          </Picker>
        </Item>
        <Item picker>
          <Picker
            style={{height: 50, width: 160,marginLeft: 10,marginTop: 15}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({
                investment: itemValue
              })
              // //@ts-ignore
              // setInvestment(itemValue)
            }>
            {investmentsList.map(investment => 
              <Picker.Item label={investment.name} value={investment.id} />
              )}
          </Picker>
        </Item>
        
        <Button 
          disabled={loading}
          success 
          style={{marginTop: 15,marginLeft: 10}}
          onPress={() => this.submit()}
          >
          <Text>{loading ? 'Submitting' : 'Submit'}</Text>
        </Button>
      </Form>
    </View>
  }

  
}
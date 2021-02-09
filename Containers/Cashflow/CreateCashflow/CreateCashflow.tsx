import { Button, Form, Icon, Input, Item, Picker, Text, Toast, View } from 'native-base';
import React, { useState } from 'react';
import cashflowsService from '../../../Services/CashflowsService/cashflows.service';
import incomeStreamsService from '../../../Services/IncomeStreamsService/income-streams.service';
import investmentsService from '../../../Services/InvestmentsService/investments.service';
import { Basis } from '../../../Services/lib';
import moneyTargetsService from '../../../Services/MoneyTargetsService/money-targets-service';

export const CreateCashflow = () => {
  const [moneyTarget,setMoneyTarget] = useState('');
  const [investment,setInvestment] = useState('');
  const [incomeStream,setIncomeStream] = useState('');
  const [name,setName] = useState('');
  const [amount,setAmount] = useState('');
  const [nameError,setNameError] = useState('');
  const [amountError,setAmountError] = useState('');

  function validate(){
    if(!name?.length) setNameError('Please enter name of income');
    else setNameError('');

    if(!amount?.length)
      setAmountError('Please enter amount');
    else if(!isFinite(Number(amount)))
      setAmountError('Please valid enter amount');
    else setAmountError('');
    return !nameError?.length && !amountError.length;
  }

  function submit(){
    console.log('validate',validate())
    if(validate()){
      cashflowsService.add({
        name,
        amount: Number(amount),
        acheived: [
          // moneyTarget
        ]
      });
      // setSubmissionMessage('Income Stream Added');
      Toast.show({
        text: 'Income Stream Added',
        duration: 1500
      })
    }
  }

  return <View>
    <Form>
      <Item floatingLabel error={nameError?.length !== 0}>
        <Input placeholder="Name" onChangeText={setName}/>
        {nameError?.length ? <Icon name='close-circle' /> : null}
      </Item>
        {nameError ? <Text>{nameError}</Text> : null  }
      <Item floatingLabel error={amountError?.length !== 0}>
        <Input placeholder="Amount" keyboardType='number-pad' onChangeText={setAmount} />
        {amountError?.length ? <Icon name='close-circle' /> : null}
      </Item>
        {amountError ? <Text>{amountError}</Text> : null}
      <Item picker>
        <Picker
          style={{height: 50, width: 160,marginLeft: 10,marginTop: 15}}
          onValueChange={(itemValue, itemIndex) =>
            //@ts-ignore
            setIncomeStream(itemValue)
          }>
          {incomeStreamsService.incomeStreams.map(target => 
            <Picker.Item label={target.name} value={target.name} />
            )}
        </Picker>
      </Item>
      <Item picker>
        <Picker
          style={{height: 50, width: 160,marginLeft: 10,marginTop: 15}}
          onValueChange={(itemValue, itemIndex) =>
            //@ts-ignore
            setMoneyTarget(itemValue)
          }>
          {moneyTargetsService.moneyTargets.map(target => 
            <Picker.Item label={target.name} value={target.name} />
            )}
        </Picker>
      </Item>
      <Item picker>
        <Picker
          style={{height: 50, width: 160,marginLeft: 10,marginTop: 15}}
          onValueChange={(itemValue, itemIndex) =>
            //@ts-ignore
            setInvestment(itemValue)
          }>
          {investmentsService.investments.map(investment => 
            <Picker.Item label={investment.name} value={investment.name} />
            )}
        </Picker>
      </Item>
      
      <Button 
        success 
        style={{marginTop: 15,marginLeft: 10}}
        onPress={submit}
        >
        <Text>Submit</Text>
      </Button>
    </Form>
  </View>
}
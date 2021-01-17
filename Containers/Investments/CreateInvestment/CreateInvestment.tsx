import { Button, Form, Input, Item, Text, View, Picker, Icon, Toast } from 'native-base';
import React, { useState } from 'react';
import investmentsService from '../../../Services/InvestmentsService/investments.service';
import { Basis } from '../../../Services/lib';


export const CreateInvestment = () => {
  const [basis,setBasis] = useState(Basis.MONTHLY);
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
      investmentsService.add({
        name,amount: Number(amount),basis
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
        selectedValue={basis}
        style={{height: 50, width: 160,marginLeft: 10,marginTop: 15}}
        onValueChange={(itemValue, itemIndex) =>
          //@ts-ignore
          setBasis(itemValue)
        }>
        <Picker.Item label={'DAILY'} value={Basis.DAILY} />
        <Picker.Item label={'MONTHLY'} value={Basis.MONTHLY} />
        <Picker.Item label={'YEARLY'} value={Basis.YEARLY} />
        <Picker.Item label={'LIFETIME'} value={Basis.LIFETIME} />
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
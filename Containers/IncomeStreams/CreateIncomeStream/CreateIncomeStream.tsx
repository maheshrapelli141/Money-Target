import { Button, Form, Input, Item, Text, View } from 'native-base';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { Basis } from '../../../Services/lib';

export const CreateIncomeStream = () => {
  const [basis,setBasis] = useState(Basis.MONTHLY);

  return <View>
    <Form>
      <Item floatingLabel>
        <Input placeholder="Name"/>
      </Item>
      <Item floatingLabel>
        <Input placeholder="Amount"/>
      </Item>
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
      <Button success style={{marginTop: 15,marginLeft: 10}}><Text>Submit</Text></Button>
    </Form>
  </View>
}
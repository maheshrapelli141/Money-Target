import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';
export class Loader extends Component {
  render() {
    return (
      <Spinner color='blue' />
    );
  }
}
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';

export default class MyHeader extends Component {
  render() {
    return (
      <Header
        leftComponent={
          <Icon
            name="bars"
            type="font-awesome"
            color="#ffffff"
            onPress={() => this.props.navigation.toggleDrawer()}
          />
        }
        centerComponent={{
          text: this.props.title,
         
        }}
        backgroundColor="#32867d"
      />
    );
  }
}

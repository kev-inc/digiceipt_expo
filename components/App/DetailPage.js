import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// or any pure javascript modules available in npm
import { Card, Button } from 'react-native-paper';

export default class DetailPage extends React.Component {
  static navigationOptions = {
    title: 'Detail'
  }
  render() {
    return (
      <View style={{ flex:1, alignContent: 'center', alignItems: 'center', }}>
        <Button mode='contained' onPress={() => this.props.navigation.navigate('Auth')}>Sign out</Button>
      </View>
    );
  }
}


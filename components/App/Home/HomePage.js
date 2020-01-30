import * as React from 'react';
import { View, ScrollView  } from 'react-native';
import { Appbar } from 'react-native-paper'

import RecentTransactions from './RecentTransactions'
import DealsList from './DealsList'
import Graph from './Graph'
import { getDisplayName, getFirstName } from '../../Firebase/Firebase'

import { showWelcomeMessage } from '../WelcomeMessage'

export default class HomePage extends React.Component {
  static navigationOptions = {
    headerShown: false,
  }

  componentDidMount() {
    showWelcomeMessage()
  }

  render() {

    return (
      <View style={{ flex:1, backgroundColor: '#f4f6f9' }}>
        <Appbar.Header style={{backgroundColor: 'white'}}>
          <Appbar.Content titleStyle={{color: '#0074d1'}}
            title={`Welcome back, ${getFirstName()}`}
          />
        </Appbar.Header>

        <ScrollView style={{ paddingHorizontal: 24 }}>
          <Graph />
          <RecentTransactions 
            toReceiptTab={() => this.props.navigation.navigate('Receipts')}
          />
          <DealsList />
        </ScrollView>
        
      </View>
    );
  }
}


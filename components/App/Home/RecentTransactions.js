import React from 'react'
import { View, Text } from 'react-native'
import { Button, Surface, Title, List, Avatar } from 'react-native-paper'

import ReceiptListItem from '../Receipts/ReceiptListItem'

export default class RecentTransactions extends React.Component {
  render() {
    return(
      <View>
        <Title>Recent Transactions</Title>
        <Surface style={{elevation: 4, borderRadius: 16, marginVertical: 16 }}>
          
          <List.Section>
            {[0,1,2].map((item, index) => (
                <ReceiptListItem key={index} toItemDetail={this.props.toReceiptDetail}/>
            ))}
          </List.Section>
          <Button onPress={this.props.toReceiptTab} color='#0074d1'>See all</Button>
        </Surface>
      </View>
    )
  }
}
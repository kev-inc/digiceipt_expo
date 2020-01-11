import React from 'react'
import { View, Text } from 'react-native'
import { Button, Surface, Title, List } from 'react-native-paper'

import ReceiptListItem from '../Receipts/ReceiptListItem'

import { recents } from '../../../assets/mockdata/mockdata'

export default class RecentTransactions extends React.Component {
  render() {
    return(
      <View>
        <Title>Recent Transactions</Title>
        <Surface style={{elevation: 4, borderRadius: 16, marginVertical: 16 }}>
          
          <List.Section>
            {recents.map((item, index) => (
                <ReceiptListItem 
                  key={index} 
                  shopname={item.shopname}
                  shopthumbnail={item.shopthumbnail}
                  timestamp={item.time}
                  price={item.price}
                  // toItemDetail={() => this.props.navigation.navigate('ReceiptDetail', {shopname: item.shopname, receipturl: item.receipturl})}
                />
            ))}
          </List.Section>
          <Button onPress={this.props.toReceiptTab} color='#0074d1'>See all</Button>
        </Surface>
      </View>
    )
  }
}
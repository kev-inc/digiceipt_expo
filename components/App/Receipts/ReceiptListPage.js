import React from 'react'
import { Alert, Text, View, StyleSheet, ScrollView } from 'react-native'
import { Searchbar, Card, Title, List, Avatar, Button, Appbar } from 'react-native-paper'

import ReceiptListItem from './ReceiptListItem'

import { packageData, mockdata } from '../../../assets/mockdata/mockdata'

export default class ReceiptListPage extends React.Component {
  static navigationOptions = {
    headerShown: false,
  }

  state = {
    showSearch: false,
  }

  filterClicked = () => {
    Alert.alert('Uh-oh!', 'Search filters will be added in the full version of Digiceipt.', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }

  render() {
    const { showSearch } = this.state
    packageData(mockdata)
    return (
      <View style={{ flex: 1, backgroundColor: '#f4f6f9' }}>
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.Content titleStyle={{ color: '#0074d1' }}
            title="My Receipts"
          />
          <Appbar.Action icon="magnify" color="#0074d1" onPress={() => this.setState({ showSearch: !showSearch })} />
        </Appbar.Header>

        {showSearch ? (
          <View>
            <Searchbar style={{ margin: 8 }} placeholder="Search" />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginVertical: 8 }}>
              {["Date", "Shop", "Price", "Category"].map((item, index) => (
                <Button key={index} mode="outlined" color="#0074d1" style={{ marginHorizontal: 8 }} onPress={this.filterClicked}>{item}</Button>
              ))}
            </ScrollView>
          </View>
        ) : null}



        <ScrollView>
          <List.Section>
          {packageData(mockdata).map((group, index) => (
              <View key={index}>
                <List.Subheader style={{ fontWeight: '600', backgroundColor: '#c6c6c6' }}>{group.date}</List.Subheader>
                {group.items.map((item, index2) => (
                  <ReceiptListItem
                    key={index2}
                    shopname={item.shopname}
                    shopthumbnail={item.shopthumbnail}
                    timestamp={item.time}
                    price={item.price}
                    toItemDetail={() => this.props.navigation.navigate('ReceiptDetail', { shopname: item.shopname, receipturl: item.receipturl })}
                  />
                ))}
              </View>
            ))}
          </List.Section>
        </ScrollView>

      </View>
    )
  }
}
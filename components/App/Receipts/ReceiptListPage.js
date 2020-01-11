import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Searchbar, Card, Title, List, Avatar, Button, Appbar } from 'react-native-paper'

import ReceiptListItem from './ReceiptListItem'

export default class ReceiptListPage extends React.Component {
  static navigationOptions = {
    headerShown: false,
  }

  state = {
    showSearch: false,
  }
  render() {
    const { showSearch } = this.state
    return(
      <View style={{ flex:1, backgroundColor: '#f4f6f9' }}>
        <Appbar.Header style={{backgroundColor: 'white'}}>
          <Appbar.Content titleStyle={{color: '#0074d1'}}
            title="My Receipts"
          />
          <Appbar.Action icon="magnify" color="#0074d1" onPress={() => this.setState({showSearch: !showSearch})}/>
        </Appbar.Header>

        {showSearch ? (
          <View>
            <Searchbar style={{ margin:8 }} placeholder="Search"/>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 8}}>
              <Button mode="outlined" color="#0074d1" style={{marginHorizontal:8}}>Date</Button>
              <Button mode="outlined" color="#0074d1" style={{marginHorizontal:8}}>Shop</Button>
              <Button mode="outlined" color="#0074d1" style={{marginHorizontal:8}}>Price</Button>
              <Button mode="outlined" color="#0074d1" style={{marginHorizontal:8}}>Category</Button>
            </ScrollView>
          </View>
        ) : null}

        

        <ScrollView>
          <List.Section>

            {[[0,1,2,3],[4,5,6]].map((item, index) => (
              <View key={index}>
              <List.Subheader style={{ fontWeight: '600', backgroundColor: '#c6c6c6'}}>5 January 2020</List.Subheader>
              {item.map((item2, index2) => (
                <ReceiptListItem key={index2} toItemDetail={() => this.props.navigation.navigate('ReceiptDetail')}/>
              ))}
              </View>
            ))}
          </List.Section>
        </ScrollView>
        
      </View>
    )
  }
}
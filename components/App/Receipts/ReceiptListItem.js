import React from 'react'
import { Text } from 'react-native'
import { Avatar, List } from 'react-native-paper'

export default class ReceiptListItem extends React.Component {

  render() {
    return(
      <List.Item
        title="NTUC Fairprice" 
        description="11:11am"
        left={props => <Avatar.Image style={{alignSelf: 'center', margin: 8}} size={36} source={require('../../../assets/ntuc.jpg')} />}
        right={props => <Text style={{alignSelf: 'center', margin: 8, fontWeight: '600'}}>$ 42.10</Text>}
        onPress={this.props.toItemDetail}
      />
    )
  }
}
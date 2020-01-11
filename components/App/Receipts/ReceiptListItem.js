import React from 'react'
import { Text } from 'react-native'
import { Avatar, List } from 'react-native-paper'

export default class ReceiptListItem extends React.Component {

  render() {
    const {shopname, shopthumbnail, timestamp, price } = this.props
    return(
      <List.Item
        title={shopname} 
        description={timestamp}
        left={() => <Avatar.Image style={{alignSelf: 'center', margin: 8}} size={36} source={shopthumbnail} />}
        right={() => <Text style={{alignSelf: 'center', margin: 8, fontWeight: '600'}}>$ {price}</Text>}
        onPress={this.props.toItemDetail}
      />
    )
  }
}
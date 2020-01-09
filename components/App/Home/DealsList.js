import React from 'react'
import { View, Text } from 'react-native'
import { Surface, Title } from 'react-native-paper'

export default class DealsList extends React.Component {
  render() {
    return(
      <View>
        <Title>Deals you'll love</Title>
        {[1,2,3].map((item, index) => (
          <Surface key={index} style={{elevation: 4, height: 100, borderRadius: 16, marginVertical: 8, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Ad #{item}</Text>
          </Surface> 
        ))}

      </View>
    )
  }
}
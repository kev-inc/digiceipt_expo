import React from 'react'
import { View, Text, Image } from 'react-native'
import { Surface, Title } from 'react-native-paper'

export default class DealsList extends React.Component {
  render() {
    return(
      <View>
        <Title>Deals you'll love</Title>
        {["https://www.ddb.asia/app/uploads/2016/07/KV.jpg", "https://goodyfeed.com/wp-content/uploads/2019/08/pana1.jpg", "https://www.grab.com/sg/wp-content/uploads/sites/4/2016/09/Grab_GT_WKEND4_paxblog_1300x431px-7.jpg"]
        .map((item, index) => (
          <Surface key={index} style={{elevation: 4, height: 160, borderRadius: 16, marginVertical: 8, justifyContent: 'center', alignItems: 'center', overflow:'hidden'}}>
            <Image style={{ height: '100%', width: '100%', overflow:'hidden' }} source={{ uri: item }}/>
          </Surface> 
        ))}

      </View>
    )
  }
}
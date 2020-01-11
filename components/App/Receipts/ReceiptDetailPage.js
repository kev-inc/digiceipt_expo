import React from 'react'
import { Alert, Share, Text, View, ScrollView } from 'react-native'
import { Appbar, Button } from 'react-native-paper'
import {WebView } from 'react-native-webview'

export default class ReceiptDetailPage extends React.Component {
  static navigationOptions = {
    headerShown: false,
  }

  onDelete = () => {
    Alert.alert(
      'Are you sure?',
      'Are you sure you want to delete this receipt? You will not be able to get it back once you delete it.',
      [
        { text: 'Cancel', onPress: () => console.log('OK Pressed') },
        { text: 'Delete', onPress: () => console.log('OK Pressed') },
      ]
    );
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    const shopname = this.props.navigation.getParam('shopname', 'My Receipt')
    const receipturl = this.props.navigation.getParam('receipturl', '')
    return(
      <View style={{ flex:1, backgroundColor: '#f4f6f9' }}>
        <Appbar.Header style={{backgroundColor: 'white'}}>
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} color="#0074d1"/>
          <Appbar.Content titleStyle={{color: '#0074d1'}}
            title={shopname}
          />
        </Appbar.Header>

        <WebView style={{}}
          source={{ uri: 'https://mozilla.github.io/pdf.js/web/viewer.html'  }} />

        <Appbar style={{backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around'}}>
          <Button color="#c6c6c6" onPress={this.onDelete}>Delete</Button>
          <Button color="#0074d1" onPress={() => console.log("print")}>Print</Button>
          <Button color="#0074d1" onPress={this.onShare}>Share</Button>
        </Appbar>
        
      </View>
    )
  }
}
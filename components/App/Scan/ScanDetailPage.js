import React from 'react'
import { Alert, Share, Text, View, ScrollView } from 'react-native'
import { Appbar, Button } from 'react-native-paper'

export default class ScanDetailPage extends React.Component {
  static navigationOptions = {
    header: null,
  }

  onSave = () => {
    Alert.alert(
      'Receipt saved!',
      'Receipt successfully added to your account!',
      [
        { text: 'OK', onPress: () => {
          this.props.navigation.pop()
          this.props.navigation.navigate('Receipts')
        } },
      ]
    );
    
  }

  render() {
    return(
      <View style={{ flex:1, backgroundColor: '#f4f6f9' }}>
        <Appbar.Header style={{backgroundColor: 'white'}}>
          <Appbar.Content titleStyle={{color: '#0074d1'}}
            title="Add this receipt?"
          />
        </Appbar.Header>

        <ScrollView>
          <Text>Scan Detail</Text>
        </ScrollView>

        <Appbar style={{backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around'}}>
          <Button color="#c6c6c6" onPress={() => this.props.navigation.pop()}>Cancel</Button>
          <Button color="#0074d1" onPress={this.onSave}>Save</Button>
        </Appbar>
        
      </View>
    )
  }
}
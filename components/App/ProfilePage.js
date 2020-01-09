import React from 'react';
import { Text, View } from 'react-native';
import { Appbar, Avatar, Button, Caption, Title } from 'react-native-paper';

export default class ProfilePage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f4f6f9' }}>
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.Content
            titleStyle={{ color: '#0074d1' }}
            title="My Profile"
          />
        </Appbar.Header>
        <View style={{alignItems: 'center', margin: 16}}>
          <Avatar.Image
            size={96}
            source={{
              uri: 'https://imgix.bustle.com/uploads/image/2019/9/3/842e6ae1-2db8-44d4-87b9-c6bfdb14e1d2-endgame.png?w=1020&h=574&fit=crop&crop=faces&auto=format&q=70',
            }}
          />
          <Title style={{fontWeight: '600'}}>Steve Rogers</Title>
          <Caption>captain@avengers.com</Caption>
        </View>
        <Button
          color='#0074d1'
          onPress={() => this.props.navigation.navigate('Auth')}>
          Log out
        </Button>
      </View>
    );
  }
}

import React from 'react';
import { Text, View } from 'react-native';
import { Appbar, Avatar, Button, Caption, Title, Surface } from 'react-native-paper';
import { getEmail, getDisplayName, fbLogout, getGender, getUserDatabase } from '../../Firebase/Firebase'
import LogoutLoader from './LogoutLoader';

export default class ProfilePage extends React.Component {

  state = {
    showloader: false,
    gender: ''
  }

  logout = () => {
    this.setState({ showloader: true }, () => {
      fbLogout().then(() => {
        this.setState({ showloader: false })
      })
    })
  }

  componentDidMount() {
    getUserDatabase().then(snapshot => {
      if(snapshot.val()) {
        this.setState({gender: snapshot.val().gender})
      }
    })
  }

  render() {
    const { gender, showloader } = this.state
    return (
      <View style={{ flex: 1, backgroundColor: '#f4f6f9' }}>
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.Content
            titleStyle={{ color: '#0074d1' }}
            title="My Profile"
          />
        </Appbar.Header>
        <View style={{ margin: 16 }}>
          <Surface style={{ alignItems: 'center', elevation: 2, padding: 16}}>
            <Avatar.Image style={{backgroundColor: null}}
              source={ require('../../../assets/parrot.png')}
            />
            <Title style={{ fontWeight: '600' }}>{getDisplayName()}</Title>
            <Caption>{getEmail()}</Caption>
          </Surface>
          <Button
          color='#0074d1'
          mode="contained"
          onPress={this.logout}>
          Log out
        </Button>
        </View>
        
        <LogoutLoader visible={showloader} />
      </View>
    );
  }
}

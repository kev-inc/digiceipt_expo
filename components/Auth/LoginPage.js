import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput, Button, Checkbox, HelperText, Portal } from 'react-native-paper';
import { fbLogin } from '../Firebase/Firebase'
import LoginLoader from './LoginLoader';

export default class LoginPage extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    rememberLogin: true,
    email: 'test@test.com',
    password: 'testtest',
    helpertext: ' ',
    showloader: false
  };

  alert = () => {
    Alert.alert('Uh-oh!', 'This feature is not yet available.', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  login = () => {
    const { email, password } = this.state
    this.setState({ showloader: true }, () => {
      fbLogin(email, password)
        .catch(error => {
          this.setState({ showloader: false, helpertext: error.message })
        })
    })

  }
  render() {
    const checked = this.state.rememberLogin;
    const { email, password, helpertext, showloader } = this.state;

    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">

        <ScrollView>
          <View
            style={{
              padding: 24,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <View style={{ height: 120, width: 40 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ opacity: 0.2, fontSize: 20, fontWeight: '600' }}>
                Log in to{' '}
              </Text>
              <Text
                style={{ fontSize: 20, color: '#0074d1', fontWeight: '600' }}>
                Digiceipt
              </Text>
            </View>

            <TextInput
              label="Email"
              selectionColor="#0074d1"
              underlineColor="#0074d1"
              keyboardType="email-address"
              style={{ backgroundColor: null }}
              value={email}
              onChangeText={text => this.setState({ email: text })}
              theme={{ colors: { primary: '#0074d1' } }}
            />

            <TextInput
              label="Password"
              selectionColor="#0074d1"
              underlineColor="#0074d1"
              style={{ backgroundColor: null }}
              value={password}
              onChangeText={text => this.setState({ password: text })}
              secureTextEntry={true}
              theme={{ colors: { primary: '#0074d1' } }}
            />

            <View style={{ flexDirection: 'row', marginVertical: 8 }}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => this.setState({ rememberLogin: !checked })}
              />
              <Text
                style={{ marginLeft: 16, opacity: 0.5, alignSelf: 'center' }}>
                Remember me?
              </Text>
            </View>

            <HelperText type="error">{helpertext}</HelperText>

            <Button
              mode="contained"
              style={{ marginVertical: 8 }}
              color="#0074d1"
              onPress={this.login}>
              Log in
            </Button>


            <View style={{ flex: 1, flexDirection: 'row', marginVertical: 8 }}>
              <Text style={{ opacity: 0.5 }}>Forgot password? </Text>
              <Text
                style={{
                  color: '#0074d1',
                  textDecorationLine: 'underline',
                  fontWeight: '600',
                }}
                onPress={this.alert}>
                Reset it here
              </Text>
            </View>
          </View>
        </ScrollView>
        <LoginLoader visible={showloader} />

      </KeyboardAvoidingView>
    );
  }
}

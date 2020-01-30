import React from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { fbSignup, updateUserDetails, updateUserDatabase } from '../Firebase/Firebase'
import SignupLoader from './SignupLoader';

export default class SignupPage extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    firstname: '',
    lastname: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    email: '',
    password: '',
    confirmpassword: '',
    helpertext: ' ',
    showloader: false
  };

  onSignup = () => {
    const { firstname, lastname, day, month, year, gender, email, password } = this.state
    this.setState({ showloader: true }, () => {
      fbSignup(email, password)
        .then(() => updateUserDetails(firstname, lastname).then(() => {
          updateUserDatabase(firstname, lastname, day, month, year, gender, email)
        }))
        .catch(error => {
          this.setState({ showloader: false, helpertext: error.message })
        })
    })

  };

  render() {
    const {
      firstname,
      lastname,
      day,
      month,
      year,
      gender,
      email,
      password,
      confirmpassword,
      helpertext,
      showloader
    } = this.state;

    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView>
          <View
            style={{
              margin: 24,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <View style={{ height: 120, width: 40 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ opacity: 0.2, fontSize: 20, fontWeight: '600' }}>
                Sign up with{' '}
              </Text>
              <Text
                style={{ fontSize: 20, color: '#0074d1', fontWeight: '600' }}>
                Digiceipt{' '}
              </Text>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: 16 }}>
              <TextInput
                label="First Name"
                selectionColor="#0074d1"
                underlineColor="#0074d1"
                style={{ flex: 1, backgroundColor: null, marginRight: 2 }}
                value={firstname}
                onChangeText={text => this.setState({ firstname: text })}
                theme={{ colors: { primary: '#0074d1' } }}
              />
              <TextInput
                label="Last Name"
                selectionColor="#0074d1"
                underlineColor="#0074d1"
                keyboardType="email-address"
                style={{ flex: 1, backgroundColor: null, marginLeft: 2 }}
                value={lastname}
                onChangeText={text => this.setState({ lastname: text })}
                theme={{ colors: { primary: '#0074d1' } }}
              />
            </View>

            <Text style={{ marginLeft: 10, fontSize: 12, opacity: 0.5 }}>
              Date of Birth
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <TextInput
                label="Day"
                selectionColor="#0074d1"
                underlineColor="#0074d1"
                keyboardType="numeric"
                style={{ flex: 1, backgroundColor: null, marginRight: 2 }}
                value={day}
                onChangeText={text => this.setState({ day: text })}
                theme={{ colors: { primary: '#0074d1' } }}
              />
              <TextInput
                label="Month"
                selectionColor="#0074d1"
                underlineColor="#0074d1"
                keyboardType="numeric"
                style={{ flex: 1, backgroundColor: null, marginLeft: 2 }}
                value={month}
                onChangeText={text => this.setState({ month: text })}
                theme={{ colors: { primary: '#0074d1' } }}
              />
              <TextInput
                label="Year"
                selectionColor="#0074d1"
                underlineColor="#0074d1"
                keyboardType="numeric"
                style={{ flex: 1, backgroundColor: null, marginLeft: 2 }}
                value={year}
                onChangeText={text => this.setState({ year: text })}
                theme={{ colors: { primary: '#0074d1' } }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 16,
              }}>
              <Text style={{ margin: 10, opacity: 0.5 }}>Gender</Text>
              <View style={{ flexDirection: 'row' }}>
                <Button
                  color="#0074d1"
                  mode={gender == 'male' ? 'outlined' : 'text'}
                  onPress={() => this.setState({ gender: 'male' })}>
                  M
                </Button>
                <Button
                  color="#0074d1"
                  mode={gender == 'female' ? 'outlined' : 'text'}
                  onPress={() => this.setState({ gender: 'female' })}>
                  F
                </Button>
              </View>
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

            <TextInput
              label="Confirm password"
              selectionColor="#0074d1"
              underlineColor="#0074d1"
              style={{ backgroundColor: null }}
              value={confirmpassword}
              onChangeText={text => this.setState({ confirmpassword: text })}
              secureTextEntry={true}
              theme={{ colors: { primary: '#0074d1' } }}
            />

            <HelperText type="error">{helpertext}</HelperText>

            <Text style={{ opacity: 0.25, fontSize: 12, marginVertical: 16 }}>
              By creating an account, you agree with our{' '}
              <Text
                style={{ fontWeight: '600', textDecorationLine: 'underline' }}>
                Terms & Conditions
              </Text>
            </Text>

            <Button
              mode="contained"
              style={{ marginVertical: 8 }}
              color="#0074d1"
              onPress={this.onSignup}>
              Sign up
            </Button>
          </View>
        </ScrollView>
        <SignupLoader visible={showloader} />
      </KeyboardAvoidingView>
    );
  }
}

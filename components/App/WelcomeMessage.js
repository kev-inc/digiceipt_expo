import { Alert } from 'react-native'

export function showWelcomeMessage() {
  Alert.alert('Welcome to Digiceipt!',
    'Thank you for being a part of the Alpha test for Digiceipt!\n\n'
    + 'As we are still in the stages of collaborating with merchants, we have prepopulated the app with sample data so you can experience a taste of what Digiceipt can offer.\n\n'
    + 'We hope you will continue to support us! Thank you!',
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
}
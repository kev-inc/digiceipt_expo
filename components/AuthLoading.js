import React from 'react'
import { View, Text } from 'react-native'
import { getAuth } from './Firebase/Firebase'

export default class AuthLoading extends React.Component {


    render() {
        getAuth().onAuthStateChanged(user => {
            if (user) {
                this.props.navigation.navigate('App')
                console.log("login as " + user.email)
            } else {
                this.props.navigation.navigate('Auth')
                console.log("logout")
            }
        })
        return (
            <View><Text>Auth loading</Text></View>
        )
    }
}
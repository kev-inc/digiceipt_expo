import React from 'react'
import { ActivityIndicator, Dialog } from 'react-native-paper'

export default class LoginLoader extends React.Component {
    render() {
        return(
            <Dialog visible={this.props.visible} dismissable={false}>
                <Dialog.Title>Logging in</Dialog.Title>
                <Dialog.Content>
                    <ActivityIndicator animating={true}/>
                </Dialog.Content>
            </Dialog>
        )
    }
}
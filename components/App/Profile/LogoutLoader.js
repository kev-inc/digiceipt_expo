import React from 'react'
import { ActivityIndicator, Dialog } from 'react-native-paper'

export default class LogoutLoader extends React.Component {
    render() {
        return(
            <Dialog visible={this.props.visible} dismissable={false}>
                <Dialog.Title>Logging out</Dialog.Title>
                <Dialog.Content>
                    <ActivityIndicator animating={true}/>
                </Dialog.Content>
            </Dialog>
        )
    }
}
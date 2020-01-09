import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './HomePage'
import ReceiptDetailPage from './../Receipts/ReceiptDetailPage'

export const HomeStackNavigator = createStackNavigator({
  Home: HomePage, 
  ReceiptDetail: ReceiptDetailPage
}, {
  initialRouteName: 'Home'
})


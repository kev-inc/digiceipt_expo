import { createStackNavigator } from 'react-navigation-stack';
import ReceiptListPage from './ReceiptListPage'
import ReceiptDetailPage from './ReceiptDetailPage'

export const ReceiptStackNavigator = createStackNavigator({
  ReceiptList: ReceiptListPage, 
  ReceiptDetail: ReceiptDetailPage
}, {
  initialRouteName: 'ReceiptList'
})


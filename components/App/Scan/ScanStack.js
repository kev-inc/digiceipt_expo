import { createStackNavigator } from 'react-navigation-stack';
import ScanPage from './ScanPage'
import ScanDetailPage from './ScanDetailPage'

export const ScanStackNavigator = createStackNavigator({
  Scan: ScanPage, 
  ScanDetail: ScanDetailPage
}, {
  initialRouteName: 'Scan'
})


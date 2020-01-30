import React from 'react'
import { View, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { Surface } from 'react-native-paper'

export default class Graph extends React.Component {
  render() {
    const data = {
      labels: [ "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Today"],
      datasets: [{
        data: [50,40,70,20,100,30,60]
      }]
    }

    const chartConfig = {
      backgroundGradientFrom: "#0074d1",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#0074d1",
      backgroundGradientToOpacity: 0,
      color: () => `#ffffff`,
    };
    
    const screenWidth = Dimensions.get("window").width-32

    return(
      <View>
        <Surface style={{elevation: 4, marginVertical: 16, borderRadius: 16, backgroundColor: '#0074d1'}}>
          <LineChart
            data={data}
            width={screenWidth}
            height={200}
            chartConfig={chartConfig}
            fromZero={true}
            withInnerLines={false}
            withOuterLines={false}
            formatYLabel={x => Math.round(x)}
            yAxisLabel="$"
            bezier
            style={{ marginVertical:8 }}
          />
        </Surface>
      </View>
    )
  }
}
import React from 'react'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { View } from 'react-native'

class LineChartAxes extends React.Component {

    render() {

        const { dataC, dataY, dataX } = this.props;

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30

        return (
            <View style={{ height: 200, padding: 10, flexDirection: 'row' }}>
                <YAxis
                    data={dataY}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    formatLabel={(value, index) => `${value}W`}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={dataC}
                        contentInset={verticalContentInset}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                    >
                        <Grid />
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={dataX}
                        //formatLabel={(value) => value}
                        xAccessor={({ item }) => item}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>
        )
    }

}

export default LineChartAxes
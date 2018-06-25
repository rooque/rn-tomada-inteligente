import _range from 'lodash.range';
import React, { Component } from 'react';
import { InteractionManager, ScrollView, StyleSheet } from 'react-native';
import { Card, Colors, LoaderScreen, Text, View } from 'react-native-ui-lib';

import LineChart from '../../components/LineChartAxes';

const randomFloat = (min, max) => Math.random() * (max - min) + min

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            c1: 0.0,
            ready: false
        }
        this.rangeW = _range(150, 250, 10);
        this.rangeX12 = _range(12, 24, 1);
        this.data12 = _range(12).map(() => randomFloat(150, 250));
        this.rangeX7 = _range(7, 14, 1);
        this.data7 = _range(7).map(() => randomFloat(150, 250));
    }

    componentDidMount() {
        this.realTimeInterval = setInterval(this.realTimeUpdate.bind(this), 1000)
        InteractionManager.runAfterInteractions(() => this.setState({ ready: true }))
    }

    componentWillUnmount() {
        clearInterval(this.realTimeInterval)
    }

    realTimeUpdate() {
        const randVal = (randomFloat(150, 250)).toFixed(2);
        this.setState({ c1: randVal });
    }

    render() {
        if (!this.state.ready) {
            return (
                <LoaderScreen
                    color={Colors.blue60}
                    message="Aguarde..."
                    overlay
                />
            )
        }
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <Card>
                        <View flex padding-10>
                            <View flex>
                                <Text text70 dark30>
                                    Consumo (tempo real)
                                </Text>
                                <View row bottom>
                                    <Text text20 dark20>
                                        {this.state.c1}
                                    </Text>
                                    <View paddingL-10 paddingB-10>
                                        <Text text50>W/h</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Card>
                    <Card marginT-15>
                        <View flex padding-10>
                            <View flex>
                                <Text text70 dark30>
                                    Consumo (últimas 12h)
                                </Text>
                                <View>
                                    <LineChart dataX={this.rangeX12} dataY={this.rangeW} dataC={this.data12} />
                                </View>
                            </View>
                        </View>
                    </Card>
                    <Card marginT-15>
                        <View flex padding-10>
                            <View flex>
                                <Text text70 dark30>
                                    Consumo (últimos 7 dias)
                                </Text>
                                <View>
                                    <LineChart dataX={this.rangeX7} dataY={this.rangeW} dataC={this.data7} />
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
});
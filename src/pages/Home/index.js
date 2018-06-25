import React, { Component } from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, Switch, Text, View } from 'react-native-ui-lib';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      t1: false,
      t2: false,
      t3: false,
      t4: false,
      c1: 200,
      c2: 300,
      c3: 36,
      c4: 16
    }
  }

  componentWillMount(){
    StatusBar.setBackgroundColor('#c8c8c8')
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Card>
            <View row flex padding-10>
              <View flex>
                <Text text70 dark30>
                  Tomada 1
              </Text>
                <Text text60 dark20>
                  TV
              </Text>
              </View>
              <View flex centerV right>
                <Switch onColor={'#4cd964'} offColor={'#ff3b30'} value={this.state.t1} onValueChange={() => this.setState({ t1: !this.state.t1 })} />
              </View>
            </View>
            <View row paddingL-10 paddingR-10 marginB-10>
              <View flex-2 left>
                <Text text70>Consumo médio: {this.state.c1} W/h</Text>
              </View>
              <View flex right>
                <Button
                  text60 link style={{ marginBottom: 4 }} label="+ info" onPress={() => Actions.info()} />
              </View>
            </View>
          </Card>
          <Card marginT-15>
            <View row flex padding-10>
              <View flex>
                <Text text70 dark30>
                  Tomada 2
              </Text>
                <Text text60 dark20>
                  SOM
              </Text>
              </View>
              <View flex centerV right>
                <Switch onColor={'#4cd964'} offColor={'#ff3b30'} value={this.state.t2} onValueChange={() => this.setState({ t2: !this.state.t2 })} />
              </View>
            </View>
            <View row paddingL-10 paddingR-10 marginB-10>
              <View flex-2 left>
                <Text text70>Consumo médio: {this.state.c2} W/h</Text>
              </View>
              <View flex right>
                <Button
                  text60 link style={{ marginBottom: 4 }} label="+ info" onPress={() => Actions.info()} />
              </View>
            </View>
          </Card>
          <Card marginT-15>
            <View row flex padding-10>
              <View flex>
                <Text text70 dark30>
                  Tomada 3
              </Text>
                <Text text60 dark20>
                  CARREGADOR
                </Text>
              </View>
              <View flex centerV right>
                <Switch onColor={'#4cd964'} offColor={'#ff3b30'} value={this.state.t3} onValueChange={() => this.setState({ t3: !this.state.t3 })} />
              </View>
            </View>
            <View row paddingL-10 paddingR-10 marginB-10>
              <View flex-2 left>
                <Text text70>Consumo médio: {this.state.c3} W/h</Text>
              </View>
              <View flex right>
                <Button
                  text60 link style={{ marginBottom: 4 }} label="+ info" onPress={() => Actions.info()} />
              </View>
            </View>
          </Card>
          <Card marginT-15>
            <View row flex padding-10>
              <View flex>
                <Text text70 dark30>
                  Tomada 4
              </Text>
                <Text text60 dark20>
                  ABAJUR
              </Text>
              </View>
              <View flex centerV right>
                <Switch onColor={'#4cd964'} offColor={'#ff3b30'} value={this.state.t4} onValueChange={() => this.setState({ t4: !this.state.t4 })} />
              </View>
            </View>
            <View row paddingL-10 paddingR-10 marginB-10>
              <View flex-2 left>
                <Text text70>Consumo médio: {this.state.c4} W/h</Text>
              </View>
              <View flex right>
                <Button
                  text60 link style={{ marginBottom: 4 }} label="+ info" onPress={() => Actions.info()} />
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
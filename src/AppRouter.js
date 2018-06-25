import React from 'react';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux'
import { Text, View, Colors } from 'react-native-ui-lib';
import HomePage from './pages/Home'
import InfoPage from './pages/Info'

const CustomTitle = (props) => (<View paddingL-20><Text text50 dark10 style={{ fontWeight: '500' }}>{props.title}</Text></View>)

export default () => (
  <Router sceneStyle={{ backgroundColor: Colors.dark70 }}>
    <Stack key="root" >
      <Scene key="home" component={HomePage} renderTitle={<CustomTitle title="Tomadas" />} />
      <Scene key="info" component={InfoPage} renderTitle={<CustomTitle title="Informações" />} />
    </Stack>
  </Router>
);
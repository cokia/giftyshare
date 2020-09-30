/* eslint-disable no-use-before-define */
import React from 'react';
import {
  SafeAreaView, StatusBar,
} from 'react-native';
import MainScreen from './views/mainScreen';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      {/* @ts-ignore */}
      <MainScreen />
    </SafeAreaView>
  </>
);

export default App;

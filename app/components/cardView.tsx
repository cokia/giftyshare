/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StyleSheet, View, SafeAreaView,
} from 'react-native';
import Giftcard from './cardcomponent';

export default class Giftview extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <View flexDirection="column">
            <View flexDirection="row">
              <Giftcard />
              <Giftcard />
            </View>
            <View flexDirection="row">
              <Giftcard />
              <Giftcard />
            </View>
            <View flexDirection="row">
              <Giftcard />
              <Giftcard />
            </View>
            <View flexDirection="row">
              <Giftcard />
              <Giftcard />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: '#EEEEEE',
  },
  text: {
    textAlign: 'center',
    margin: 10,
    height: 75,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

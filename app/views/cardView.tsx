/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StyleSheet, View, SafeAreaView,
} from 'react-native';
import Giftcard from '../components/cardcomponent';

export default class Giftview extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <View style={styles.test}>
            <Giftcard bgColor="#123dfd" enddate="D-16" giftname="TEST" brandname="스타벅스" />
            <Giftcard bgColor="#123dfd" enddate="D-16" giftname="TEST" brandname="스타벅스" />
            <Giftcard bgColor="#123dfd" enddate="D-16" giftname="TEST" brandname="스타벅스" />
            <Giftcard bgColor="#123dfd" enddate="D-16" giftname="TEST" brandname="스타벅스" />
            <Giftcard bgColor="#123dfd" enddate="D-16" giftname="TEST" brandname="스타벅스" />
            <Giftcard bgColor="#123dfd" enddate="D-16" giftname="TEST" brandname="스타벅스" />
            <Giftcard bgColor="#123dfd" enddate="D-16" giftname="TEST" brandname="스타벅스" />
            <Giftcard />
            <Giftcard />
            <Giftcard />
            <Giftcard />
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
  test: {
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    display: 'flex',
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

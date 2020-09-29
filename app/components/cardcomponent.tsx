/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StyleSheet, Text, SafeAreaView,
} from 'react-native';
import CardView from 'react-native-cardview';

export default class Giftcard extends React.Component {
  render() {
    return (
    //   <SafeAreaView style={styles.safeAreaView}>
      <CardView
        cardElevation={5}
        cardMaxElevation={5}
        cornerRadius={5}
        style={styles.card}
      >
        <Text style={styles.text}>asdasd</Text>
      </CardView>
    //   </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
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

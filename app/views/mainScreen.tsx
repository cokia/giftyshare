/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/export */
/* eslint-disable no-use-before-define */
import React from 'react';
import {
  SafeAreaView, StyleSheet, StatusBar, Text, ScrollView, View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import PropertyBar from '../components/propertyBar';
import CardView from './cardView';
import BottomActionButton from '../components/bottomActionButton';

declare const global: {HermesInternal: null | {}};

export default class MainScreen extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          {/* <Header /> */}
          {global.HermesInternal == null ? null : (
            <View style={styles.engine} />
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                기프티쉐어,
                ~~웅앵웅
              </Text>
            </View>
            <PropertyBar />
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            {/* @ts-ignore */}
            <CardView />
          </ScrollView>
          <BottomActionButton />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

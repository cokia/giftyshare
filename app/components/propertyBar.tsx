/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StyleSheet, Text, Button, View,
} from 'react-native';

class PropertyBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>대충 여기에 라디오버튼 들어갈 자리 라는 뜻</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default PropertyBar;

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StyleSheet, Text,
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
        style={[{ backgoundColor: '#125d34' },
          styles.card,
        ]}
      >
        <Text style={styles.text}>
          유효기간 :
          {this.props.enddate}
        </Text>
        <Text style={styles.text}>
          상품명 :
          {this.props.giftname}
        </Text>
        <Text style={styles.text}>
          사용처 :
          {this.props.brandname}
        </Text>
      </CardView>
    //   </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor: 'red',
    alignItems: 'flex-start',
    width: '40%',
    margin: '5%',
    display: 'flex',
    // justifyContent: 'center',
    // alignSelf: 'center',
    // flex: 1,
  },
  text: {
    textAlign: 'left',
    marginLeft: '3%',
    marginTop: '10%',
    marginBottom: '5%',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StyleSheet, Text, Image,
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
        style={
          styles.card
        }
      >
        <Image
          style={styles.itemimage}
          source={{ uri: 'https://lh3.googleusercontent.com/proxy/WmrXeuyd0ouymAX-5HNZqpS8Qk0PUUvSxMR__SQTNtfVGQmFICn3Yw_Iqe_dQgr1rOYjYxPC8gEkgMga6ceEJci-YLmng4H_CQkPBRR1be7MdunOmiE' }}
        />
        <Text style={styles.dayText}>
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
    backgroundColor: '#036635',
    alignItems: 'flex-start',
    width: '40%',
    margin: '5%',
    display: 'flex',
    // justifyContent: 'center',
    // alignSelf: 'center',
    // flex: 1,
  },
  dayText: {
    backgroundColor: 'gray',
    position: 'absolute',
    top: 0,
    textAlign: 'right',
    right: 0,
    fontSize: 18,
    marginTop: '5%',
  },
  itemimage: {
    height: '5%',
    width: '30%',
    marginLeft: '3%',
    marginTop: '3%',
  },
  text: {
    color: 'white',
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

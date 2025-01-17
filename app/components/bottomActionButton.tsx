/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import AddGiftModal from '../views/addGiftModal';

Icon.loadFont();

export default class BottomActionButton extends React.Component {
  static Item: any;

  render() {
    return (
      <ActionButton style={styles.actionbuttonmain} buttonColor="rgba(231,76,60,1)">
        {/* <ActionButton.Item buttonColor="#9b59b6" title="New Task" onPress={() => console.log('notes tapped!')}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor="#3498db" title="Notifications" onPress={() => {}}>
          <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
    </ActionButton.Item> */}
        <ActionButton.Item buttonColor="#1abc9c" title="Add Gifticon" onPress={() => {}}>
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  actionbuttonmain: {
    marginBottom: '15%',
  },
});

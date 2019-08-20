import React from 'react';
import {Text, View} from 'react-native';
import styles from './App.styles';

export default class App extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Sign-In</Text>
      </View>
    );
  }
}

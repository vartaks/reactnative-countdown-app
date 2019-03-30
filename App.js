import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';

export default class App extends React.Component {
  render() {
    //debugger;
    return (
      <View style={styles.container}>
        <Text>{`
        Bienvenido a la applicacion, Sourabh!
        Como estas!
        `}
        </Text>
        <EventList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

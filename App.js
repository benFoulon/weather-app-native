import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurrentWeather from './components/CurrentWeather';


export default function App() {
  return (
    <View style={styles.container}>
      <CurrentWeather/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingLeft: 15,
    backgroundColor: '#0080ff',
    paddingTop: 50,
  },
});

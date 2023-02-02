import 'react-native-gesture-handler';
import {StatusBar, View} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigation/rootNavigator';

export default function App() {
  console.log('app');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

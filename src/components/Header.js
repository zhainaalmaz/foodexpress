import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors, parameters} from '../global/styles';
import {Icon} from 'react-native-elements';

export default function Header({title, type, navigation}) {
  return (
    <View style={styles.header}>
      <View style={styles.icon}>
        <Icon
          type="material-community"
          name={type}
          color={colors.headerText}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  icon: {
    marginLeft: 20,
  },
});

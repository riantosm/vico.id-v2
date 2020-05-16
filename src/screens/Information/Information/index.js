import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Information = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Information Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Information;

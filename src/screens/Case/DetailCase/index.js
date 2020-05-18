import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const DetailCase = ({route}) => {
  return (
    <View style={styles.container}>
      <Text>DetailCase Screen</Text>
      <Text>Data yang dikirim: {route.params}</Text>
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

export default DetailCase;

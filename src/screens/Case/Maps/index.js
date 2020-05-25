import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Maps = ({route, navigation}) => {
  console.log(navigation.data);
  return (
    <View style={styles.container}>
      <Text>Maps Screen</Text>
      <Text>Data yang dikirim: {navigation.params}</Text>
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

export default Maps;

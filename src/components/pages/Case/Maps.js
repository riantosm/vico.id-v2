import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {colors as c, fonts as f} from '../../../styles';
import {maps} from '../../../assets';

const Maps = ({goView}) => {
  return (
    <View style={s.container}>
      <Text style={s.text.title}>Peta persebaran</Text>
      <View style={s.card}>
        <Image source={maps} style={{width: '100%', resizeMode: 'center'}} />
        <TouchableOpacity
          onPress={() => goView()}
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
          }}>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'rgba(60,67,121,.8)',
              paddingVertical: 15,
              paddingHorizontal: 25,
              borderRadius: 30,
            }}>
            <Text style={{fontFamily: f.GoogleSans_Bold, color: c.white}}>
              Lihat
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = {
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    height: 150,
    marginTop: 10,
    padding: 10,
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 8,
    flexDirection: 'row',
  },
  text: {
    title: {
      maxWidth: 190,
      fontSize: 16,
      fontFamily: f.GoogleSans_Bold,
      color: c.black,
    },
  },
};

export default Maps;
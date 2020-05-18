import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {BgScreen} from '../../../assets';
import {Header} from '../../../components';
import {colors as c, fonts as f} from '../../../styles';

const {width, height} = Dimensions.get('window');

const Help = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'rgba(0,0,0,0.4)'}
        translucent={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={BgScreen} style={{}}>
          <Header status="help" />
          <View style={s.space(width / 7)} />
        </ImageBackground>
      </ScrollView>
    </>
  );
};

const s = {
  space: value => {
    return {
      marginBottom: value,
    };
  },
};

export default Help;

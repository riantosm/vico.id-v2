import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,Dimensions
} from 'react-native';
import {colors as c, fonts as f} from '../../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import {BoxShadow} from 'react-native-shadow';

const {width, height} = Dimensions.get('window');

const DetailCase = ({route, navigation, data}) => {
  const shadowOpt = {
    width: width - 40,
    height: 60,
    color: '#ccc',
    border: 10,
    radius: 20,
    opacity: 0.3,
    x: 0,
    y: 0,
    style: {marginBottom: 20},
  };
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#323967'}
        translucent={false}
      />

      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" color="white" size={18} />
        </TouchableOpacity>
        <Text style={s.headerTitle}>Detail kasus di {route.params[0]}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s.space(20)} />
        <View style={s.container}>
          {route.params[1].map((data, index) => {
            return (
              // <BoxShadow setting={shadowOpt}>
                <View style={s.card} key={data.FID}>
                  <Text
                    style={{
                      textAlign: 'left',
                      fontFamily: f.GoogleSans_Bold,
                      color: c.black,
                    }}>
                    {route.params[0] === 'Indonesia'
                      ? data.Provinsi
                      : data.Negara}
                  </Text>
                </View>
              // </BoxShadow>
            );
          })}
        </View>
        <View style={s.space(10)} />
      </ScrollView>
    </>
  );
};

const s = StyleSheet.create({
  header: {
    backgroundColor: c.blueDark,
    flexDirection: 'row',
    padding: 15,
  },
  headerTitle: {
    fontFamily: f.GoogleSans_Bold,
    fontSize: 18,
    color: 'white',
    marginLeft: 15,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    // marginTop: 10,
    paddingVertical: 20,
    borderRadius: 25,
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
  },
  text: {
    textAlign: 'left',
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
});

export default DetailCase;

import React, {Component, useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import Icon from 'react-native-vector-icons/Entypo';
import {CaseComp} from '../../../components';
import {colors as c, fonts as f} from '../../../styles';

const {width, height} = Dimensions.get('window');

const shadowOpt = {
  width: width - 40,
  height: 145,
  color: '#ccc',
  border: 10,
  radius: 10,
  opacity: 0.3,
  x: 0,
  y: 0,
  style: {marginBottom: 20},
};
const DetailCase = ({route, navigation, data}) => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  });
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#323967'}
        translucent={false}
      />

      <View style={s.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            color="white"
            size={18}
            style={{padding: 20}}
          />
        </TouchableOpacity>
        <Text style={s.headerTitle}>Detail kasus di {route.params[0]}</Text>
      </View>
      <App data={route.params[1]} country={route.params[0]} />
    </>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 500);
  }

  render() {
    const {isLoading} = this.state;
    return (
      <SkeletonContent
        boneColor="#dddfee"
        highlightColor="#eeeff7"
        containerStyle={{flex: 1, width}}
        isLoading={isLoading}
        layout={[
          {key: '1', width: width - 40, height: 145, margin: 20},
          {key: '2', width: width - 40, height: 145, margin: 20},
          {key: '3', width: width - 40, height: 145, margin: 20},
          {key: '4', width: width - 40, height: 145, margin: 20},
        ]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={s.space(20)} />
          <View style={s.container}>
            {this.props.data.map((data, index) => {
              return (
                <BoxShadow setting={shadowOpt} key={data.FID}>
                  <View style={s.card}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Icon
                        name="location-pin"
                        color={c.black}
                        size={18}
                        style={{paddingLeft: 10}}
                      />
                      <Text
                        style={{
                          textAlign: 'left',
                          fontFamily: f.GoogleSans_Bold,
                          color: c.black,
                          fontSize: 18,
                        }}>
                        {this.props.country === 'Indonesia'
                          ? data.Provinsi
                          : data.Negara}
                      </Text>
                    </View>
                    <View style={s.space(10)} />
                    <View style={s.row}>
                      <CaseComp status={'posi'} caseDummy={data.Kasus_Posi} />
                      <CaseComp status={'semb'} caseDummy={data.Kasus_Semb} />
                      <CaseComp status={'meni'} caseDummy={data.Kasus_Meni} />
                    </View>
                  </View>
                </BoxShadow>
              );
            })}
          </View>
          <View style={s.space(10)} />
        </ScrollView>
      </SkeletonContent>
    );
  }
}

const s = StyleSheet.create({
  header: {
    backgroundColor: c.blueDark,
    flexDirection: 'row',
    padding: 0,
    elevation: 5,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: f.GoogleSans_Bold,
    fontSize: 18,
    color: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    height: 145,
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
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

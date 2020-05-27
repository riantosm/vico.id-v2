import React, {Component} from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import Icon from 'react-native-vector-icons/Entypo';
import {Data} from '../../../assets';
import {colors as c, fonts as f} from '../../../styles';

const {width, height} = Dimensions.get('window');

const ReadHelp = ({navigation, route}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'rgba(0,0,0,0.7)'}
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
        <Text style={s.headerTitle}>Bantuan</Text>
      </View>
      <ClassRead text={route.params} />
    </>
  );
};

class ClassRead extends Component {
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
          {key: '1', width: width - 80, height: 35, margin: 20},
          {key: '2', width: width - 40, height: 145, margin: 20},
          {key: '4', width: width - 100, height: 25, margin: 20},
        ]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={s.space(20)} />
          <View style={s.container}>
            <Text style={s.text_title}>
              {this.props.text === 'Gejala' ? (
                <>{this.props.text} virus corona.</>
              ) : (
                <>Segera hadir.</>
              )}
            </Text>
            <View style={s.space(20)} />
            {this.props.text === 'Gejala' ? (
              <Data.Gejala />
            ) : (
              <Text style={s.textData}>
                Halaman ini belum tersedia. Aplikasi ini masih dalam
                pengembangan.
              </Text>
            )}
            <View style={s.space(40)} />
          </View>
          <View style={s.space(10)} />
        </ScrollView>
      </SkeletonContent>
    );
  }
}

const s = StyleSheet.create({
  header: {
    backgroundColor: '#4c8f3d',
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
  rowData: {
    flexDirection: 'row',
  },
  text: {
    textAlign: 'left',
  },
  text_title: {
    fontSize: 30,
    fontFamily: f.GoogleSans_Bold,
    color: c.black,
  },
  textData: {
    textAlign: 'left',
    fontFamily: f.GoogleSans_Bold,
    color: c.grayText,
    fontSize: 14,
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
});

export default ReadHelp;

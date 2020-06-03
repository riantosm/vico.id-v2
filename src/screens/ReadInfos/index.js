import React, {Component} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
  Blank,
  Gejala,
  Mencegah,
  Mengantisipasi,
  Mengenal,
  Mengobati,
} from '../../assets/data';
import {colors as c, fonts as f} from '../../styles';

class ReadInfos extends Component {
  constructor() {
    super();
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
    const {params} = this.props.route;
    const content = params[0];
    const page = params[1];
    const colorHeader = page === 'Informasi' ? c.orange : '#4c8f3d';
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'rgba(0,0,0,0.7)'}
          translucent={false}
        />
        <View style={[s.header, {backgroundColor: colorHeader}]}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="chevron-left"
              color="white"
              size={18}
              style={{padding: 20}}
            />
          </TouchableOpacity>
          <Text style={s.headerTitle}>{page}</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={s.space(20)} />
          <View style={s.container}>
            <Text style={s.text_title}>{content}</Text>
            <View style={s.space(20)} />
            {(content === 'Mengenal' && <Mengenal />) ||
              (content === 'Mencegah' && <Mencegah />) ||
              (content === 'Mengobati' && <Mengobati />) ||
              (content === 'Mengantisipasi' && <Mengantisipasi />) ||
              (content === 'Gejala' && <Gejala />) ||
              (content === 'Konsultasi Dokter' && <Blank />) ||
              (content === 'Rumah Sakit Terdekat' && <Blank />)}
            <View style={s.space(40)} />
          </View>
          <View style={s.space(10)} />
        </ScrollView>
      </>
    );
  }
}

export default ReadInfos;

const s = StyleSheet.create({
  header: {
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

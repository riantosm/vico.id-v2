import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import Icon from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import {CaseComp} from '../../../components';
import {colors as c, fonts as f} from '../../../styles';

const {width, height} = Dimensions.get('window');

class DetailCase extends Component {
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
    const {detailIndo, detailDuni, navigation, country} = this.props;
    const data = country === 'Indonesia' ? detailIndo : detailDuni;
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
          <Text style={s.headerTitle}>Detail kasus di {country}</Text>
        </View>
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
          <ScrollView showsVerticalScrollIndicator={true}>
            <View style={s.space(20)} />
            <View style={s.container}>
              <FlatList
                data={Object.keys(data)}
                renderItem={({item}) => (
                  <View style={s.card}>
                    <View style={s.rowData}>
                      <Icon
                        name="location-pin"
                        color={c.black}
                        size={18}
                        style={{paddingLeft: 10}}
                      />
                      <Text style={s.textData}>
                        {country === 'Indonesia'
                          ? data[item].Provinsi
                          : data[item].Negara}
                      </Text>
                    </View>
                    <View style={s.space(10)} />
                    <View style={s.row}>
                      <CaseComp
                        status={'posi'}
                        caseDummy={data[item].Kasus_Posi}
                      />
                      <CaseComp
                        status={'semb'}
                        caseDummy={data[item].Kasus_Semb}
                      />
                      <CaseComp
                        status={'meni'}
                        caseDummy={data[item].Kasus_Meni}
                      />
                    </View>
                  </View>
                )}
                keyExtractor={index => index.toString()}
              />
            </View>
            <View style={s.space(20)} />
          </ScrollView>
        </SkeletonContent>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailIndo: state.detailIndo,
    detailDuni: state.detailDuni,
    country: state.country,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailCase);

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
  },
  card: {
    height: 145,
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    marginVertical: 10,
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
  textData: {
    textAlign: 'left',
    fontFamily: f.GoogleSans_Bold,
    color: c.black,
    fontSize: 18,
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
});

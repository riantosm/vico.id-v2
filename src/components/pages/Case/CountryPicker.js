import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CustomPicker} from 'react-native-custom-picker';
import {connect} from 'react-redux';
import {down, location} from '../../../assets';
import {setCountry} from '../../../redux/actions';
import {colors as c, fonts as f} from '../../../styles';

let country = 'Indonesia';

class CountryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const options = [
      {
        color: '#2660A4',
        label: 'Indonesia',
        value: 1,
      },
      {
        color: '#FF6B35',
        label: 'Dunia',
        value: 2,
      },
    ];
    return (
      <View style={styles.containerBig}>
        <CustomPicker
          placeholder={'Indonesia'}
          options={options}
          getLabel={item => item.label}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
          modalStyle={styles.modalStyle}
          footerTemplate={this.renderFooter}
          onValueChange={value => {
            this.props.setCountry(
              value.label !== 'Indonesia' ? 'Dunia' : 'Indonesia',
            );
            this.exportState(
              value.label !== 'Indonesia' ? 'Dunia' : 'Indonesia',
            );
          }}
        />
      </View>
    );
  }

  exportState(label) {
    return (country = `${label}`);
  }

  renderHeader() {
    return (
      <View style={styles.headerFooterContainer}>
        {/* <Text style={styles.text}>Pilih</Text> */}
      </View>
    );
  }

  renderFooter(action) {
    return (
      <TouchableOpacity style={styles.headerFooterContainer}>
        {/* <Text>This is footer</Text> */}
      </TouchableOpacity>
    );
  }

  // tombol nya
  renderField(settings) {
    const {selectedItem, getLabel} = settings;
    return (
      <View style={styles.container}>
        <View>
          {selectedItem ? (
            <View style={styles.innerContainer}>
              <View style={styles.innerContainer}>
                <Image source={location} style={styles.iconLocation} />
                <Text style={[styles.text]}>{getLabel(selectedItem)}</Text>
              </View>
              <Image source={down} style={styles.iconDown} />
            </View>
          ) : (
            <View style={styles.innerContainer}>
              <View style={styles.innerContainer}>
                <Image source={location} style={styles.iconLocation} />
                <Text style={[styles.text]}>Indonesia</Text>
              </View>
              <Image source={down} style={styles.iconDown} />
            </View>
          )}
        </View>
      </View>
    );
  }

  // modal nya
  renderOption(settings) {
    const {item, getLabel} = settings;
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          {country === getLabel(item) ? (
            <Image source={location} style={styles.iconLocation} />
          ) : (
            <View style={styles.iconLocation} />
          )}
          <Text style={styles.textItem}>{getLabel(item)}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setCountry: country => {
      dispatch(setCountry(country));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryPicker);

const styles = StyleSheet.create({
  containerBig: {flex: 1, flexDirection: 'column', justifyContent: 'center'},
  container: {
    marginTop: 10,
    borderColor: c.gray,
    borderWidth: 1,
    padding: 15,
    justifyContent: 'center',
    borderRadius: 30,
    marginHorizontal: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  modalStyle: {backgroundColor: c.white, borderRadius: 15},
  iconLocation: {width: 20, height: 20, marginRight: 8},
  iconDown: {width: 15, height: 8},
  text: {
    fontSize: 18,
    fontFamily: f.GoogleSans_Bold,
    color: c.black,
  },
  textItem: {
    color: c.black,
    alignSelf: 'flex-start',
    fontFamily: f.GoogleSans_Bold,
    fontSize: 20,
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center',
  },
  optionContainer: {
    padding: 10,
    borderBottomColor: c.gray,
    borderBottomWidth: 1,
  },
});

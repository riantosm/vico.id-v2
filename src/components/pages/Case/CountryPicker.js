// Library
import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  Text,
  View,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {CustomPicker} from 'react-native-custom-picker';
import {colors as c, fonts as f} from '../../../styles';
import {location, down} from '../../../assets';

// Styles
// import styles from './CountryPickerStyle'

let country = 'Indonesia';

export default class CountryPicker extends Component {
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
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <CustomPicker
          placeholder={'Indonesia'}
          options={options}
          getLabel={item => item.label}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
          modalStyle={{backgroundColor: c.white, borderRadius: 15}}
          footerTemplate={this.renderFooter}
          onValueChange={value => {
            this.props.onPress(value.label);
            this.exportState(value.label);
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
      <TouchableOpacity
        style={styles.headerFooterContainer}
        // onPress={() => {
        //   Alert.alert('Footer', "You've click the footer!", [
        //     {
        //       text: 'OK',
        //     },
        //     {
        //       text: 'Close Dropdown',
        //       onPress: action.close.bind(this),
        //     },
        //   ]);
        // }}
      >
        {/* <Text>This is footer, click me!</Text> */}
      </TouchableOpacity>
    );
  }

  // tombol nya
  renderField(settings) {
    const {selectedItem, defaultText, getLabel, clear} = settings;
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
          <Text
            style={{
              color: c.black,
              alignSelf: 'flex-start',
              fontFamily: f.GoogleSans_Bold,
              fontSize: 20,
            }}>
            {getLabel(item)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  iconLocation: {width: 20, height: 20, marginRight: 8},
  iconDown: {width: 15, height: 8},
  text: {
    fontSize: 18,
    fontFamily: f.GoogleSans_Bold,
    color: c.black,
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: 'grey',
    borderRadius: 5,
    marginRight: 10,
    padding: 5,
  },
  optionContainer: {
    padding: 10,
    borderBottomColor: c.gray,
    borderBottomWidth: 1,
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

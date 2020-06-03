const React = require('react-native');
import {colors as c, fonts as f} from '../../styles';

const {StyleSheet} = React;

export default {
  text: {
    title: {
      fontSize: 20,
      fontFamily: f.GoogleSans_Bold,
      color: c.black,
    },
    desc: {
      fontSize: 14,
      fontFamily: f.GoogleSans_Bold,
      color: c.grayText,
      textAlign: 'justify',
    },
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
};

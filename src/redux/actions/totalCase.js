import firebase from 'firebase';
import {SET_TOTAL_DUNI, SET_TOTAL_INDO} from './types';

const setTotalIndo = totalIndo => {
  return {
    type: SET_TOTAL_INDO,
    value: totalIndo,
  };
};

const watchTotalIndo = () => {
  return function(dispatch) {
    firebase
      .database()
      .ref('indonesia/data_total')
      .on(
        'value',
        function(snapshot) {
          var personData = snapshot.val();
          dispatch(setTotalIndo(personData));
        },
        function(error) {},
      );
  };
};

const setTotalDuni = totalDuni => {
  return {
    type: SET_TOTAL_DUNI,
    value: totalDuni,
  };
};

const watchTotalDuni = () => {
  return function(dispatch) {
    firebase
      .database()
      .ref('dunia/data_total')
      .on(
        'value',
        function(snapshot) {
          var personData = snapshot.val();
          dispatch(setTotalDuni(personData));
        },
        function(error) {},
      );
  };
};

export {setTotalIndo, watchTotalIndo, setTotalDuni, watchTotalDuni};

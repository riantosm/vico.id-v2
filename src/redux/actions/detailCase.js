import firebase from 'firebase';
import {SET_DETAIL_CASE_DUNI, SET_DETAIL_CASE_INDO} from './types';

const setDetailIndo = detailIndo => {
  return {
    type: SET_DETAIL_CASE_INDO,
    value: detailIndo,
  };
};

const watchDetailIndo = () => {
  return function(dispatch) {
    firebase
      .database()
      .ref('indonesia/data')
      .on(
        'value',
        function(snapshot) {
          var personData = snapshot.val();
          dispatch(setDetailIndo(personData));
        },
        function(error) {},
      );
  };
};

const setDetailDuni = detailDuni => {
  return {
    type: SET_DETAIL_CASE_DUNI,
    value: detailDuni,
  };
};

const watchDetailDuni = () => {
  return function(dispatch) {
    firebase
      .database()
      .ref('dunia/data')
      .on(
        'value',
        function(snapshot) {
          var personData = snapshot.val();
          dispatch(setDetailDuni(personData));
        },
        function(error) {},
      );
  };
};

export {setDetailIndo, watchDetailIndo, setDetailDuni, watchDetailDuni};

import {SET_COUNTRY} from './types';

const setCountry = country => {
  return {
    type: SET_COUNTRY,
    value: country,
  };
};

export {setCountry};

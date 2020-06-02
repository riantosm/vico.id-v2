import {
  SET_COUNTRY,
  SET_DETAIL_CASE_DUNI,
  SET_DETAIL_CASE_INDO,
  SET_TOTAL_DUNI,
  SET_TOTAL_INDO,
} from '../actions/types';
import currentDate from './currentDate';

const initialState = {
  country: 'Indonesia',
  totalIndo: {Meni: 0, Posi: 0, Semb: 0},
  totalDuni: {Meni: 0, Posi: 0, Semb: 0},
  detailIndo: {},
  detailDuni: {},
  currentDate: currentDate,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        country: action.value,
      };

    case SET_TOTAL_INDO:
      return {
        ...state,
        totalIndo: action.value,
      };

    case SET_TOTAL_DUNI:
      return {
        ...state,
        totalDuni: action.value,
      };

    case SET_DETAIL_CASE_INDO:
      return {
        ...state,
        detailIndo: action.value,
      };

    case SET_DETAIL_CASE_DUNI:
      return {
        ...state,
        detailDuni: action.value,
      };

    default:
      return state;
  }
};

export default reducers;

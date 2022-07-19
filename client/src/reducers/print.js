import { GET_RESPONSE, GET_RESPONSE_ERROR, } from '../actions/types';
const initialState = {
    responses: [],
    loading: true,
    error: {},
};

function printReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_RESPONSE:
        return {
          ...state,
          responses: payload,
          loading: false,
        };
      case GET_RESPONSE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  export default printReducer;
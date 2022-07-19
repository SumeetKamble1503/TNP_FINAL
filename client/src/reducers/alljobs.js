import { GET_JOB_RESPONSE, GET_JOB_ERROR, } from '../actions/types';
const initialState = {
    jobs: [],
    loading: true,
    error: {},
    job: null,
};


function printReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_JOB_RESPONSE:
        return {
          ...state,
          jobs: payload,
          loading: false,
        };
      case GET_JOB_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
          //profile: null,
        };
      default:
        return state;
    }
  }
  
  export default printReducer;
import axios from 'axios';
import {GET_RESPONSE_ERROR,GET_RESPONSE} from './types'
export const getResponse = (id) => async (dispatch) => {
    try{

        const res = await axios.get(`http://localhost:5000/api/activejob/response/${id}`);
        
        console.log(res.data);
        dispatch({
            type: GET_RESPONSE,
            payload: res.data,
        });
    }

    catch(err){
    
        dispatch({
            type: GET_RESPONSE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        })
        
       
    }
};
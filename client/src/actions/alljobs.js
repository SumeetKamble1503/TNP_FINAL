import axios from 'axios';
import {GET_JOB_RESPONSE,GET_JOB_ERROR} from './types'
export const AllJobs = () => async (dispatch) => {
    try{

        const res = await axios.get('http://localhost:5000/api/jobs');
        
        console.log(res.data);
        dispatch({
            type: GET_JOB_RESPONSE,
            payload: res.data,
        });
    }

    catch(err){
    
        dispatch({
            type: GET_JOB_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        })
        
       
    }
};
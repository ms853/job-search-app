import axios from 'axios';
import FETCH_JOBS from './types';
import reverseGeocode from 'latlng-to-zip';
import qs from "qs";

//parameters that will be converted.
const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
};

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';

//method for constructing the query.
//returns the query.
const buildJobsUrl = (zip) => {
    const query = qs.stringify({...JOB_QUERY_PARAMS, l: zip})
    return `${JOB_ROOT_URL}${query}`;
};

//asyncronous action creator
export const fetchJobs = (region) => async (dispatch) => {
    try{
        let zipCode = await reverseGeocode(region);
        const url = buildJobsUrl(zipCode);
        let { data } = await axios.get(url);
        dispatch({ type: FETCH_JOBS, payload: data});
        console.log(data);
    }catch(e) {
        console.log(e);
    }
};


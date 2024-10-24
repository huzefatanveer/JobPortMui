// import axios from 'axios';
// import { JOB_TYPE_LOAD_FAIL, JOB_TYPE_LOAD_REQUEST, JOB_TYPE_LOAD_SUCCESS } from '../constants/jobTypeConstant';



// export const jobTypeLoadAction = () => async (dispatch) => {
//     dispatch({ type: JOB_TYPE_LOAD_REQUEST });
//     try {
//         const { data } = await axios.get('/api/type/jobs');
//         dispatch({
//             type: JOB_TYPE_LOAD_SUCCESS,
//             payload: data
//         });
//     } catch (error) {
//         dispatch({
//             type: JOB_TYPE_LOAD_FAIL,
//             payload: error.response.data.error
//         });
//     }
// }

import { JOB_TYPE_LOAD_FAIL, JOB_TYPE_LOAD_REQUEST, JOB_TYPE_LOAD_SUCCESS } from '../constants/jobTypeConstant';

export const jobTypeLoadAction = () => async (dispatch) => {
    dispatch({ type: JOB_TYPE_LOAD_REQUEST });

    // Mock job types
    const mockJobTypes = [
        { jobTypeName: "Full Time" },
        { jobTypeName: "Part Time" },
        { jobTypeName: "Contract" }
    ];

    try {
        dispatch({
            type: JOB_TYPE_LOAD_SUCCESS,
            payload: { jobT: mockJobTypes }
        });
    } catch (error) {
        dispatch({
            type: JOB_TYPE_LOAD_FAIL,
            payload: 'Failed to load job types'
        });
    }
};

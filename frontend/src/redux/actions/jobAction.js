// import axios from 'axios';
// import { JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_SUCCESS } from "../constants/jobconstant"


// export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
//     dispatch({ type: JOB_LOAD_REQUEST });
//     try {
//         const { data } = await axios.get(`/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
//         dispatch({
//             type: JOB_LOAD_SUCCESS,
//             payload: data
//         });
//     } catch (error) {
//         dispatch({
//             type: JOB_LOAD_FAIL,
//             payload: error.response.data.error
//         });
//     }
// }

import { JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_SUCCESS } from "../constants/jobconstant";

export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });

    // Mock data for jobs
    const mockJobs = [
        {
            _id: "1",
            title: "Frontend Developer",
            description: "We are looking for a skilled frontend developer.",
            jobType: { jobTypeName: "Full Time" },
            location: "New York"
        },
        {
            _id: "2",
            title: "Backend Developer",
            description: "Join us as a backend developer for scalable applications.",
            jobType: { jobTypeName: "Part Time" },
            location: "San Francisco"
        },
        {
            _id: "3",
            title: "DevOps Engineer",
            description: "We need a DevOps Engineer with AWS experience.",
            jobType: { jobTypeName: "Full Time" },
            location: "Austin"
        },
        {
            _id: "4",
            title: "Data Scientist",
            description: "Data Scientist for Machine Learning projects.",
            jobType: { jobTypeName: "Contract" },
            location: "Remote"
        }
    ];

    // Mock unique locations
    const mockLocations = ["New York", "San Francisco", "Austin", "Remote"];

    try {
        // Simulate filtering by keyword, category, or location
        const filteredJobs = mockJobs.filter(job => {
            const matchesKeyword = keyword ? job.title.toLowerCase().includes(keyword.toLowerCase()) : true;
            const matchesCategory = cat ? job.jobType.jobTypeName === cat : true;
            const matchesLocation = location ? job.location === location : true;
            return matchesKeyword && matchesCategory && matchesLocation;
        });

        // Mock paginated data
        const page = pageNumber;
        const pages = 1;  // Since we have limited jobs, there's only one page

        // Dispatch success action with mock data
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: {
                success: true,
                jobs: filteredJobs,
                page,
                pages,
                setUniqueLocation: mockLocations
            }
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: 'Failed to load jobs'
        });
    }
};

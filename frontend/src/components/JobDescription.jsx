import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSingleJob } from '@/redux/jobSlice';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);
    const params = useParams();

    const jobId = params.id;

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials:true});
            console.log(res.data);
            if(res.data.success) {
                setIsApplied(true);
                const updatedSingleJob = {...singleJob, applications: [...singleJob.applications, {applicant: user?._id}]};
                dispatch(setSingleJob(updatedSingleJob)); //helps us in realtime UI updation
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application=> application.applicant === user?._id)) //Ensuring the app is in sync with the applicants
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id])

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className="font-bold text-xl">{singleJob?.title}</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className='font-bold text-blue-700' variant='ghost'>{singleJob?.position} positions</Badge>
                        <Badge className='font-bold text-red-500' variant='ghost'>{singleJob?.jobType}</Badge>
                        <Badge className='font-bold text-purple-500' variant='ghost'>{singleJob?.salary} LPA</Badge>
                    </div>
                </div>

                <Button  onClick={isApplied ? null: applyJobHandler} disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-800'}`}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div>
                <h1 className='font-bold my-1 '>Role: <span className='p1-4 font-normal txt-gray-800'>{singleJob?.title}</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experienceLevel} yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary} LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications.length}</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split('T')[0]}</span></h1>
            </div>

        </div>
    )
}

export default JobDescription

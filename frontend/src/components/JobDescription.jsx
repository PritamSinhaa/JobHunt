import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';

const JobDescription = () => {
    const isApplied = false;
    const params = useParams();
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className="font-bold text-xl">Frontend Developer</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className='font-bold text-blue-700' variant='ghost'>12 positions</Badge>
                        <Badge className='font-bold text-red-500' variant='ghost'>Part Time</Badge>
                        <Badge className='font-bold text-purple-500' variant='ghost'>24 LPA</Badge>
                    </div>
                </div>

                <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-800'}`}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div>
                <h1 className='font-bold my-1 '>Role: <span className='p1-4 font-normal txt-gray-800'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Delhi</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt nihil voluptas fuga esse impedit dignissimos repellat ab blanditiis ullam hic, corrupti odio sed sit earum alias incidunt repudiandae facilis voluptatum!</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>1-3 yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>124LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>300</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>12-05-2026</span></h1>
            </div>

        </div>
    )
}

export default JobDescription

import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();
    // const jobId = "ssrsdfsdfasf";
    const daysAgo = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDiff = currentTime - createdAt;
        return Math.floor(timeDiff/ (1000*24*60*60));
    }
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100' >
            <div className='flex items-center justify-between'>
                <p className='text-gray-500 text-sm'>{job?.createdAt == 0 ? 'Today' : `${daysAgo(job?.createdAt)} days ago`}</p>
                <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>
            </div>

            <div className="flex items-center gap-2 my-2">
                <Button className='p-6' variant='outline' size='icon'>
                    <Avatar>
                        <AvatarImage src='https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='text-lg font-bold'>{job?.company?.name}</h1>
                    <p className='text-gray-500 text-sm'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className='font-bold text-blue-700' variant='ghost'>{job?.position} positions</Badge>
                <Badge className='font-bold text-red-500' variant='ghost'>{job?.jobType}</Badge>
                <Badge className='font-bold text-purple-500' variant='ghost'>{job?.salary} LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={()=> navigate(`/description/${job?._id}`)} variant='outline'>Details</Button>
                <Button>Save for Later</Button>
            </div>

        </div>
    )
}

export default Job

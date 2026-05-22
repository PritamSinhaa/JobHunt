import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100' >
            <div className='flex items-center justify-between'>
                <p className='text-gray-500 text-sm'>2 days ago</p>
                <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>
            </div>

            <div className="flex items-center gap-2 my-2">
                <Button className='p-6' variant='outline' size='icon'>
                    <Avatar>
                        <AvatarImage src='https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='text-lg font-bold'>Company Name</h1>
                    <p className='text-gray-500 text-sm'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, harum.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className='font-bold text-blue-700' variant='ghost'>12 positions</Badge>
                <Badge className='font-bold text-red-500' variant='ghost'>Part Time</Badge>
                <Badge className='font-bold text-purple-500' variant='ghost'>24 LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant='outline'>Details</Button>
                <Button>Save for Later</Button>
            </div>

        </div>
    )
}

export default Job

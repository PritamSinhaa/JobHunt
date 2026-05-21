
import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { Button } from './ui/button'

const HeroSection = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col my-10'>
                <h2 className='px-4 py-2 rounded-full text-[#F83002] font-medium'>No.1 Job Hunt Website</h2>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get your <span className='text-[#6A38C2]'>Dream Job</span></h1>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='flex w-[40%] shadow-lg border pl-3 border-gray-200  rounded-full item-center gap-4 mx-auto '>
                    <input
                    type='text'
                    placeholder='Find your Dream Job'
                    className='w-full border-none outline-none'
                    />
                    <Button className='rounded-r-full rounded-l-full'>
                        <Search className='h-5 w-5'/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection

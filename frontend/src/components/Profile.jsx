import React, { useState } from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import Navbar from './shared/Navbar'
import UpdateProfileDialog from './UpdateProfileDialog'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobsTable from './AppliedJobsTable'


const skills = ['Html', 'Css', 'JavaScript', 'React'];
const isResume = true;
const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className='h-20 w-20' >
              <AvatarImage src='https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg' alt='profile' />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>Full Name</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur libero aliquam!</p>
            </div>
          </div>
          <Button onClick={()=> setOpen(true)} className='text-right' variant='outline'><Pen /></Button>
        </div>
        <div className="my-5">
          <div className='flex items-center gap-4 my-2'>
            <Mail />
            <span>patel@gmail.com</span>
          </div>
          <div className='flex items-center gap-4 my-2'>
            <Contact />
            <span>6202354713</span>
          </div>
        </div>
        <div className='my-5'>
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {
              skills.length !== 0 ? skills.map((item, index) => (<Badge key={index} variant='outline'>{item}</Badge>)) : <span>N/A</span>
            }
          </div>
        </div>
        <div className="grid w-full max-w-small items-center gap-1.5">
          <Label className='text-md font-bold'>Resume</Label>
          {
            isResume ? <a target='blank' href='https://youtube.com'
              className='text-blue-500 w-full hover:underline cursor-pointer'>Link</a> : <span>N/A</span>
          }

        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl ">
        <h1 className='font-bold text-lg'>Applied Jobs</h1>
        <AppliedJobsTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Profile

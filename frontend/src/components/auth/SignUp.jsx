import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '../utils/constant'
import { Toaster } from '../ui/sonner'
import { toast } from 'sonner'
import axios from 'axios'

const SignUp = () => {
    const [input,setInput] = useState({
        fullname: '',
        email: '',
        phoneNumber: '',
        password: '',
        role: '',
        file: ''
    });
    const navigate = useNavigate();
    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    };
    const changeFileHandler = (e)=> {
        setInput({...input, file:e.target.files?.[0]});
    }

    const submitHandler = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', input.fullname);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('password', input.password);
        formData.append('role', input.role);
        if(input.file){
            formData.append('file', input.file);
        }
        try {
            const res = await axios.post(`${USER_API_END_POINT}/register`,formData, {
                headers: {
                    "Content-Type":'multipart/form-data'
                },
                withCredentials: true
            });
            if(res.data.success) {
                Navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message);
        }
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label className='mb-2 ml-1.5'>Full Name</Label>
                        <Input type='text' placeholder='Sajjad' value={input.value} name='fullname' />
                    </div>
                    <div className='my-2'>
                        <Label className='mb-2 ml-1.5'>Email</Label>
                        <Input type='email' value={input.value} name='email' onChange={changeEventHandler} placeholder='patel@gmail.com'  />
                    </div>
                    <div className='my-2'>
                        <Label className='mb-2 ml-1.5'>Phone No.</Label>
                        <Input type='number' value={input.value} onChange={changeEventHandler} name='phoneNumber' placeholder='+91 6202385316' />
                    </div>
                    <div className='my-2'>
                        <Label className='mb-2 ml-1.5'>Password</Label>
                        <Input type='password' value={input.value} onChange={changeEventHandler} name='password' placeholder='Abc@123' />
                    </div>
                    <div className='flex items-center'>

                        <RadioGroup defaultValue="comfortable" className="w-fit flex items-center">
                            <div className="flex items-center gap-3">
                                <Input type='radio' name='role'
                                 checked={input.role === 'student'} 
                                 onChange={changeEventHandler} 
                                 value='student' 
                                 className='cursor-pointer' />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <Input type='radio' onChange={changeEventHandler}
                                  name='role' value='recruiter'
                                  checked={input.role === 'recruiter'} 
                                  className='cursor-pointer' />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>

                    </div>
                    <div className='flex items-center gap-2'>
                        <Label>Profile</Label>
                        <Input type='file' 
                         accept='image/*'
                         onChange={changeFileHandler} 
                         className='cursor-pointer' />

                    </div>
                    <Button type="submit" className='my-4 w-full'>Sign Up</Button>
                    <span>Already have an account? <NavLink to='/login' className='text-blue-600'>Login</NavLink></span>
                </form>
            </div>
        </div>
    )
}

export default SignUp

import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { USER_API_END_POINT } from '../utils/constant'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import store from '@/redux/store'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        role: '',
    });
    
    const navigate = useNavigate();
    const {loading} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    };

    const submitHandler = async (e)=>{
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`,input, {
                headers: {
                    "Content-Type":'application/json'
                },
                withCredentials: true
            });
            if(res.data.success) {
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        } finally {
            dispatch(setLoading(false));
        }
    }
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>
                    <div className='my-2'>
                        <Label className='mb-2 ml-1.5'>Email</Label>
                        <Input type='email' value={input.email} name='email' onChange={changeEventHandler} placeholder='patel@gmail.com' />
                    </div>
                    <div className='my-2'>
                        <Label className='mb-2 ml-1.5'>Password</Label>
                        <Input type='password' value={input.password} onChange={changeEventHandler} name='password' placeholder='Abc@123' />
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
                    {loading ? <Button className='my-4 w-full'>Please Wait <Loader2 className='mr-2 h-4 w-4 animate-spin'/> </Button>
                    : <Button type="submit" className='my-4 w-full'>Login</Button>}
                    
                    <span>Don't have an account? <NavLink to='/signup' className='text-blue-600'>SignUp</NavLink></span>
                </form>
            </div>
        </div>
    )
}

export default Login

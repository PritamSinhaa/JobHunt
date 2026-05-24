import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar } from '../ui/avatar';
import { AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import { toast } from 'sonner';
import { setUser } from '@/redux/authSlice';

const Navbar = () => {
  const {user} = useSelector(store=> store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async ()=> {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
      if(res.data.success){
        dispatch(setUser(null));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className='bg-white'>
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className='text-2xl font-bold'>Hire<span className='text-[#F83002]'>Flow</span></h1>
        </div>
        <div className='flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/jobs'>Jobs</NavLink></li>
            <li><NavLink to='/browse'>Browse</NavLink></li>
          </ul>
          {
            !user ? (
              <div className='flex gap-2'>
                <NavLink to='/login'><Button variant='outline' className='px-5 bg-gray-200'>Login</Button></NavLink>
                <NavLink to='/signUp'><Button  className='px-5'>SignUp</Button></NavLink>
              </div>
            ):(
              <Popover>
            <PopoverTrigger asChild>
              <Avatar className='cursor-pointer'>
                <AvatarImage src={user?.profile?.profilePhoto} />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <Avatar className='cursor-pointer'>
                <AvatarImage src={user?.profile?.profilePhoto} />
              </Avatar>
              <div>
                <h4 className='font-medium'>{user?.fullname}</h4>
                <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
              </div>
              <div className='flex flex-row gap-2 my-2'>
                <Button variant="secondary"><User2/><NavLink to='/profile'>View Profile</NavLink> </Button>
                <Button onClick={logoutHandler}><LogOut/>Log Out</Button>
              </div>
            </PopoverContent>
          </Popover>
            )
          }
          

        </div>
      </div>

    </div>
  )
}

export default Navbar
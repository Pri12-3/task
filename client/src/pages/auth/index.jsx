import React from 'react'
import Login from '@/assets/Login.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import {toast} from 'sonner';
import {apiClient} from '@/lib/api-client';
import { LOGIN_ROUTE,SIGNUP_ROUTE } from '@/utils/constant.js'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '@/store'

const Auth = () => {

  const navigate= useNavigate();
  const {setUserInfo}= useAppStore();
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatelogin = () => {
    if (!email.length) {
      toast.error("Email is required.")
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.")
      return false;
    }
    return true;
  };

  const validateSignup =() => {
    if (!email.length) {
      toast.error("Email is required.")
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.")
      return false;
    }
    if (password !== confirmPassword) {
      toast.error('Password and Confirm password doesn`t match!!')
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    if (validatelogin()) {
      const response = await apiClient.post(LOGIN_ROUTE, {email, password},{withCredentials: true});
    if (response.data.user.id){
      setUserInfo(response.data.user)
      if (response.data.user.profileSetup) navigate('/chat');
      else navigate('/profile');
    };
    console.log({ response});
  }
};

  async function handleSignup() {
    if (validateSignup()) {
      const response = await apiClient.post(SIGNUP_ROUTE, { email, password }, { withCredentials: true })
      console.log({ response })
    };
    if (response, status === 201) {
      navigate('/profile')
    }
  }

  return (
    <div className='h-[100vh] w-[100vw] bg-gray-300 flex items-center justify-center'>
      <div className='h-[80vh] bg-white border-2 border-slate-200 text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl: [60vw] rounded-3xl grid xl:grid-cols-2 '>
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='flex items-center justify-center flex-col'>
            <div className='flex items-center justify-center'>
              <h1 className='text-3xl font-bold md:text-4xl'>Welcome Buddy!!!</h1>
            </div>
            <p classNAme='font-medium text-center'>
              Fill all details to connect with people!!
            </p>
          </div>
          <div className='flex items-center justify-center w-full'>
            <Tabs className='w-3/4' defaultValue='login'>
              <TabsList className='bg-transparent rounded-none w-full'>
                <TabsTrigger value ='login' className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:font-semibold data-[state=active]: border-b-purple-500 p-3 transition-all duration-300'>Login</TabsTrigger>
                <TabsTrigger value ='signup' className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full  data-[state=active]:font-semibold data-[state=active]: border-b-purple-500 p-3 transition-all duration-300'>Signup</TabsTrigger>
              </TabsList> 
              <TabsContent className='flex flex-col gap-5 mt-10' value='login'>
                <Input placeholder='Email' type='email' className='rounded-full p-6'
                value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <Input placeholder='Password' type='password' className='rounded-full p-6'
                value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <Button className='rounded-full p-6 text-white' onClick={handleLogin}>
                  Login 
                </Button>

              </TabsContent>
              <TabsContent className='flex flex-col gap-5 mb-10' value='signup'>
                <Input placeholder='Email' type='email' className='rounded-full p-6'
                value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <Input placeholder='Password' type='password' className='rounded-full p-6'
                value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <Input placeholder='Confirm Password' type='password' className='rounded-full p-6'
                value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
                <Button className='rounded-full p-6 text-white' onClick={handleSignup}>
                  Sign-Up
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className='hidden xl:flex justify-center items-center'>
          <img src={Login} alt='Login-pic' className='h-[400px]'/>
        </div>
      </div>
    </div>
  )
}

export default Auth

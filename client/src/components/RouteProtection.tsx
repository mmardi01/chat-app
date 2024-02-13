'use client'
import React, { useEffect } from 'react'
import NavBar from './NavBar';
import { useAppSelector,useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import { login, logout } from '@/features/user/userSlice';

export default function RouteProtection({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  const getUser = async () => {
      const res = await fetch('http://localhost:3333/user',
      {credentials:'include'});
      if(res.ok) {
        const user = await res.json();
        dispatch(login(user));
      }
      else {
        dispatch(logout());
        router.push('/')
      }
  }

  useEffect(() => { 
    console.log('im here')
    getUser()
  },[])

  return (
    <>
    {
      user.logedIn ?
      <NavBar /> : null
    }
      {
        children
      }
    </>
  )
}

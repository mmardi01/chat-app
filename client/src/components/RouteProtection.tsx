'use client'
import React, { useContext, useEffect } from 'react'
import NavBar from './NavBar';
import { useAppSelector,useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import { login, logout } from '@/features/user/userSlice';
import { activeContext } from '@/context/activePageContext';

export default function RouteProtection({
  children,
}: {
  children: React.ReactNode;
}) {
  const active = useContext(activeContext);

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
    getUser()
  },[active?.activePage])

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

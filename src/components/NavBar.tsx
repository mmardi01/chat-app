'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useContext, useEffect } from "react";
import { activeContext } from "@/context/activePageContext";


function NavBar() {
  const active = useContext(activeContext)
  useEffect(() => {
    console.log(active?.activePage);
  },[active])
  
  return (
    <nav className='bg-[#6E00FF] gap-12 h-full w-[90px] rounded-2xl flex flex-col items-center py-7'>
      <Link href={'/'} className={`w-full py-2 flex justify-center
          ${active?.activePage === 'profile' ? 'bg-[#612DD1] border-r-4 border-[#F3B559]' : ''}`}>
        <Image
          className='w-[60px] h-[60px] rounded-full border-1 object-cover object-center border-[4px] border-[#5322BC]'
          src={'/me.jpg'}
          width={80}
          quality={100}
          height={80}
          alt='profile picture'
        />
      </Link>
      <div className='flex flex-col w-full gap-4'>
        <Link href={'/'} className={`w-full py-4 flex justify-center
          ${active?.activePage === 'home' ? 'bg-[#612DD1] border-r-4 border-[#F3B559]' : ''}`}
        >
          <Image 
            src={'/home.svg'} 
            width={32} 
            height={32} 
            quality={100} 
            alt='icon'
          />
        </Link>
        <Link href={'/chat'} className={`w-full py-4 flex justify-center
          ${active?.activePage === 'chat' ? 'bg-[#612DD1] border-r-4 border-[#F3B559]' : ''}`}>
          <Image 
            src={'/chat.svg'} 
            width={32} 
            height={32} 
            quality={100} 
            alt='icon'
          />
        </Link>
        <Link href={'/'} className={`w-full py-4 flex justify-center
          ${active?.activePage === 'notif' ? 'bg-[#612DD1] border-r-4 border-[#F3B559]' : ''}`}>
          <Image 
            src={'/notification.svg'} 
            width={32} 
            height={32} 
            quality={100} 
            alt='icon'
          />
        </Link>
        <Link href={'/'} className={`w-full py-4 flex justify-center
          ${active?.activePage === 'settings' ? 'bg-[#612DD1] border-r-4 border-[#F3B559]' : ''}`}>
          <Image 
            src={'/settings.svg'} 
            width={32} 
            height={32} 
            quality={100} 
            alt='icon' 
          />
        </Link>
      </div>
      <Image 
        src={'/logout.svg'} 
        className='mt-auto' 
        width={32} 
        height={32} 
        quality={100} 
        alt='icon'
      />
    </nav>
  );
}

export default NavBar;
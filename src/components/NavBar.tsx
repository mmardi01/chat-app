import Image from 'next/image'
import Link from 'next/link';

function NavBar() {
  return (
    <nav className='bg-[#6E00FF] gap-16 h-full w-[90px] rounded-2xl flex flex-col items-center py-7'>
      <Link href={'/'} className=''>
        <Image
          className='w-[60px] h-[60px] rounded-full border-1 object-cover object-center border-[4px] border-[#5322BC]'
          src={'/me.jpg'}
          width={80}
          quality={100}
          height={80}
          alt='profile picture'
        />
      </Link>
      <div className='flex flex-col gap-12'>
        <Link href={'/'}>
          <Image 
            src={'/home.svg'} 
            width={32} 
            height={32} 
            quality={100} 
            alt='icon'
          />
        </Link>
        <Link href={'/chat'}>
          <Image 
            src={'/chat.svg'} 
            width={32} 
            height={32} 
            quality={100} 
            alt='icon'
          />
        </Link>
        <Link href={'/'}>
          <Image 
            src={'/notification.svg'} 
            width={32} 
            height={32} 
            quality={100} 
            alt='icon'
          />
        </Link>
        <Link href={'/'}>
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
import Image from "next/image"

const groupMessages = [
  {
    groupImage: '/me.jpg',
    groupName: 'Group 1'
  }
]

const Groups = () => {
  return (
    <div  className="w-full p-5 bg-white text-[#303030] h-[35%] rounded-[20px] shadow-[#79c6ef46] shadow-md">
      <h1 className="font-bold px-1 text-2xl m-2">Groups</h1>
      <div className="w-full h-[80%] overflow-y-scroll scroll-hidden">
        <div className="flex gap-6 items-center w-full h-[80px] border-b border-[#b4abab99]">
          <Image
            className="w-[50px] h-[50px] object-cover object-center rounded-full"
            src={'/me.jpg'}
            width={50}
            quality={80}
            height={50}
            alt="me"
          ></Image>
          <div>
            <h1 className="font-bold text-xl">Group 1</h1>
            <p className=" text-lg font-light">Hahahahaha!</p>
          </div>
         <div className="ml-auto flex flex-col gap-1">
          <p className="font-light text-[#7C7C7C]">Today, 9.52pm</p>
          <span className="bg-red-500 rounded-full text-white w-6 text-center h-6 ml-auto">4</span>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Groups
import Image from "next/image";
import { RiPhoneLine } from "react-icons/ri";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";


function ChatBoxHeader() {
  return (
    <div className="w-full h-[86px]  border-b-2 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Image
            className="w-14 h-14 object-cover object-center rounded-full"
            alt="me"
            width={100}
            height={100}
            src={'/me.jpg'}
          ></Image>
          <div>
            <h1 className="font-semibold text-xl">Mustapha Mardi</h1>
            <p className="font-light text-md">Last seen, 2.02pm</p>
          </div>
        </div>
        <div className="flex mb-4 text-3xl items-center text-[#9747FF] gap-6 self-center">
          <button>
            <RiPhoneLine />
          </button>
          <button>
            <HiOutlineVideoCamera />
          </button>
          <button>
          <HiDotsVertical />
          </button>
        </div>
      </div>
  );
}

export default ChatBoxHeader;
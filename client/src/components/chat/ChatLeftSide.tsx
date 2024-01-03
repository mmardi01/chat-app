import Image from "next/image";
import Groups from "./Groups";
import PeopleMessages from "./PeopleMessages";

function ChatLeftSide() {

  return (
    <div className="w-[40%] h-full flex flex-col gap-6">
      <div className="w-full flex items-center h-[10%] relative">
        <Image 
          className="absolute left-6"
          src={'/search.svg'}
          width={28}
          height={28}
          alt="icon"
        ></Image>
        <input placeholder="Search" className="w-full px-20 text-2xl text-[#7C7C7C] font-normal placeholder:text-[#7C7C7C] bg-white outline-none h-full rounded-[20px] shadow-[#79c6ef46] shadow-md" type="text" />
      </div>
      <Groups />
      <PeopleMessages />
    </div>
  );
}

export default ChatLeftSide;
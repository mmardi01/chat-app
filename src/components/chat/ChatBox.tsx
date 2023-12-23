import ChatBoxHeader from "./ChatBoxHeader";
import { IoSend } from "react-icons/io5";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaRegLaughBeam } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
function ChatBox() {
  return (
    <div className="w-[60%] h-full flex flex-col bg-white rounded-[20px] shadow-[#79c6ef46] shadow-md p-6">
      <ChatBoxHeader />
      <div className="w-full h-full"></div>
      <div className="flex w-full h-16 justify-between">
        <div className="w-[90%]  h-full bg-[#EFF6FC] gap-6 text-2xl items-center rounded-[20px] flex px-6">
          <AiOutlinePaperClip className='text-3xl'/>
          <input className="placeholder:font-light placeholder:text-[#303030] placeholder:text-xl outline-none font-light text-[#303030] text-xl bg-transparent" placeholder="Type your message here..." type="text" />
          <FaRegLaughBeam className='ml-auto' />
          <FiCamera />
        </div>
        <button className="h-[63px] text-white text-2xl w-[63px] flex items-center justify-center rounded-2xl bg-[#6E00FF]">
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
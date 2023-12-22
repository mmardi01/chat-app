'use client'
import { useContext, useEffect } from "react";
import { activeContext } from "@/context/activePageContext";
import ChatLeftSide from "@/components/chat/ChatLeftSide";

function Chat() {
  const active = useContext(activeContext);
  useEffect(() => {
    active?.setActivePage('chat');
  },[]);
  
  return (
    <div className="w-full h-full flex justify-center gap-6">
      <ChatLeftSide />
      <div className="w-[60%] h-full bg-white rounded-[20px] shadow-[#79c6ef46] shadow-md"></div>
    </div>
  );
}

export default Chat;
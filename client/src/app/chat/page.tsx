'use client'
import { useContext, useEffect } from "react";
import { activeContext } from "@/context/activePageContext";
import ChatLeftSide from "@/components/chat/ChatLeftSide";
import ChatBox from "@/components/chat/ChatBox";

function Chat() {
  const active = useContext(activeContext);
  useEffect(() => {
    active?.setActivePage('chat');
  },[]);
  
  return (
    <div className="w-full h-full flex justify-center gap-6">
      <ChatLeftSide />
      <ChatBox />
    </div>
  );
}

export default Chat;
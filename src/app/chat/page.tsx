'use client'
import { useContext, useEffect } from "react";
import { activeContext } from "@/context/activePageContext";

function Chat() {
  const active = useContext(activeContext);
  useEffect(() => {
    active?.setActivePage('chat');
  },[])
  return (
    <div className="w-full h-ful flex justify-center items-center">
      Chat
    </div>
  );
}

export default Chat;
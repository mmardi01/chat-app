'use client'
import { activeContext } from "@/context/activePageContext";
import { useContext, useEffect } from "react";

function page() {

  const active = useContext(activeContext);
  useEffect(() => {
    active?.setActivePage('notifications');
  },[])

  return (
    <div className="w-full h-full">
      <div className="w-[300px] h-[300px] bg-green-500 relative">
        <div className="w-[100px] h-[100px] bg-red-500 absolute top-0 right-0" ></div>
      </div>
    </div>
  );
}

export default page;
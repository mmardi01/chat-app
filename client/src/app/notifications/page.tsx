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
      Enter
    </div>
  );
}

export default page;
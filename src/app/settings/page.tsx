'use client'
import { activeContext } from "@/context/activePageContext";
import { useContext, useEffect } from "react";

function page() {
  const active = useContext(activeContext);
  useEffect(() => {
    active?.setActivePage('settings');
  },[])
  return (
    <div className="h-full w-full">
      Enter
    </div>
  );
}

export default page;
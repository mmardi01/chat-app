"use client";
import { useContext, useEffect } from "react";
import { activeContext } from "@/context/activePageContext";
import Forms from "@/components/auth/Forms";
export default function Home() {
  const active = useContext(activeContext);
  useEffect(() => {
    active?.setActivePage("home");
  });


  return (
    <>
      <Forms />
      {/* <main className="flex w-full h-full items-center justify-center bg-white rounded-xl shadow-[#79c6ef2d] shadow-md"> */}
      {/* <h1>Home</h1> */}
      {/* </main> */}
    </>
  );
}
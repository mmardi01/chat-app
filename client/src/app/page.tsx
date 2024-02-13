"use client";
import { useContext, useEffect } from "react";
import { activeContext } from "@/context/activePageContext";
import Forms from "@/components/auth/Forms";
import { useAppSelector } from "@/store/hooks";

export default function Home() {
  const user = useAppSelector((state) => state.user);
  const active = useContext(activeContext);
  useEffect(() => {
    active?.setActivePage("home");
  }, []);

  return (
    <>
      {!user.logedIn ? (
        <Forms />
      ) : (
        <main className="flex w-full h-full items-center justify-center bg-white rounded-xl shadow-[#79c6ef2d] shadow-md">
          <h1>Home</h1>
        </main>
      )}
    </>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { activeContext } from "@/context/activePageContext";
import { motion } from "framer-motion";

const links = [
  {
    name: "home",
    path: "/",
    icon: "/home.svg",
  },
  {
    name: "chat",
    path: "/chat",
    icon: "/chat.svg",
  },
  {
    name: "notifications",
    path: "/notifications",
    icon: "/notification.svg",
  },
  {
    name: "settings",
    path: "/settings",
    icon: "/settings.svg",
  },
];

function NavBar() {
  const active = useContext(activeContext);
  
  return (
    <nav className="bg-[#6E00FF] z-0 gap-12 h-full w-[90px] rounded-2xl flex flex-col items-center py-7">
      <Link
        href={"/"}
        className={`w-full py-2 flex justify-center
        ${
          active?.activePage === "profile"
          ? "bg-[#612DD1] border-r-4 border-[#F3B559]"
          : ""
        }`}
        >
        <Image
          priority
          className="w-[60px] h-[60px] rounded-full border-1 object-cover object-center border-[4px] border-[#5322BC]"
          src={"/me.jpg"}
          width={60}
          quality={100}
          height={60}
          alt="profile picture"
        />
      </Link>
      <div className="flex flex-col w-full gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`w-full py-4 flex justify-center relative transition-all`}
          >
            <Image
            className="w-[32px] h-[32px]"
              src={link.icon}
              width={32}
              height={32}
              quality={100}
              alt="icon"
            />
            {active?.activePage === link.name ? (
              <motion.span
                layoutId="underline"
                className="absolute -z-10 bg-[#612DD1] inset-0 border-r-4 border-[#F3B559]"
              ></motion.span>
            ) : null}
          </Link>
        ))}
      </div>
      <Image
        src={"/logout.svg"}
        className="mt-auto"
        width={32}
        height={32}
        quality={100}
        alt="icon"
      />
    </nav>
  );
}

export default NavBar;
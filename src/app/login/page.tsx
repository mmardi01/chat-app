'use client'
import { useState } from "react";
import {motion} from 'framer-motion'
import Login from "@/components/Login";
import Signup from "@/components/Signup";

function page() {

  const [right, updatSide] = useState(true);

  return (
    <div className="flex w-full h-full ">
      <Login updateSide={updatSide} />
      <Signup  updateSide={updatSide}/>
      {
        right ?
          <motion.div layoutId="purple" className={`w-1/2 h-full bg-[#6E00FF] absolute right-0 top-0`}></motion.div>
          :
          <motion.div layoutId="purple" className={`w-1/2 h-full bg-[#6E00FF] absolute left-0 top-0`}></motion.div>
      }
    </div>
  );
}

export default page;
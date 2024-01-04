"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";
import Image from "next/image";

function Forms() {
  const [right, updatSide] = useState(true);
  
  return (
    <div className="flex w-full h-full text-white">
      <Login updateSide={updatSide} />
      <Signup updateSide={updatSide} />
      {right ? (
        <motion.div
          layoutId="purple"
          className={`w-1/2 h-full flex flex-col justify-center items-center bg-[#6E00FF] absolute right-0 top-0`}
        >
          <h1 className="font-bold text-4xl">Lorem ipsum dolor</h1>
          <Image src={"/vector.svg"} alt="vecotr" width={927} height={618} />
          <p className="font-light text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ultricies.
          </p>
        </motion.div>
      ) : (
        <motion.div
          layoutId="purple"
          className={`w-1/2 h-full flex flex-col justify-center items-center bg-[#6E00FF] absolute left-0 top-0`}
        >
           <h1 className="font-bold text-4xl">Lorem ipsum dolor</h1>
          <Image priority src={"/vector.svg"} alt="vecotr" width={927} height={618} />
          <p className="font-light text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ultricies.
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default Forms
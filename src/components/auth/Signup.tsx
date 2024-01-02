import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";

function Signup({
  updateSide,
}: {
  updateSide: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="w-1/2 h-full flex justify-center items-center text-[#09090B]">
      <div className="flex flex-col items-center  gap-2">
        <div>
          <h1 className="font-bold text-4xl">Create a new account.</h1>
          <p className="text-md text-[#71717A] mt-1">
            Welcome ! Select method to Sign up:
          </p>
        </div>
        <div className="w-full flex justify-between font-[400] text-xl my-2">
          <button className="w-[180px] h-[55px] rounded-[16px] border border-[#6f00ff72] flex items-center justify-center gap-2 ">
            <Image src={"/google.png"} alt="icon" width={20} height={20} />
            <p>Google</p>
          </button>
          <button className="w-[180px] h-[55px] rounded-[16px] border border-[#6f00ff72] flex items-center justify-center gap-2">
            <Image src={"/facebook.png"} alt="icon" width={24} height={24} />
            <p>Facebook</p>
          </button>
        </div>
        <div className="flex  gap-2 items-center my-2">
          <span className="h-[0.5px] w-[110px] bg-[#71717A]"></span>
          <p className="text-[#71717A] text-[12px]">or continue with email</p>
          <span className="h-[0.5px] w-[110px] bg-[#71717A]"></span>
        </div>
        <form className="flex flex-col w-[90%] gap-6">
          <div className="relative">
            <input
              id="username"
              className="bg-[#6f00ff27] pl-12 placeholder:text-[#6f00ff4b] border border-[#6E00FF] outline-none w-full h-[55px] rounded-xl"
              type="text"
              placeholder="Username"
            />
            <Image
              className="absolute top-4 left-3"
              src={"/username.png"}
              alt=""
              width={23}
              height={23}
            />
          </div>
          <div className="relative">
            <input
              id="email"
              className="bg-[#6f00ff27] pl-12 placeholder:text-[#6f00ff4b] border border-[#6E00FF] outline-none w-full h-[55px] rounded-xl"
              type="text"
              placeholder="Email"
            />
            <Image
              className="absolute top-4 left-3"
              src={"mail.svg"}
              alt=""
              width={23}
              height={23}
            />
          </div>
          <div className="relative">
            <input
              id="password"
              className="bg-[#6f00ff27] pl-12 placeholder:text-[#6f00ff4b] border border-[#6E00FF] outline-none w-full h-[55px] rounded-xl"
              placeholder="Password"
              type="password"
            ></input>
            <Image
              className="absolute top-4 left-3"
              src={"pass.svg"}
              alt=""
              width={23}
              height={23}
            />
          </div>
          <div className="relative">
            <input
              id="confirm"
              className="bg-[#6f00ff27] pl-12 placeholder:text-[#6f00ff4b] border border-[#6E00FF] outline-none w-full h-[55px] rounded-xl"
              placeholder="Password"
              type="password"
            ></input>
            <Image
              className="absolute top-4 left-3"
              src={"pass.svg"}
              alt=""
              width={23}
              height={23}
            />
          </div>
          <button className="w-[full text-white font-bold text-xl h-[55px] rounded-xl bg-[#6f00ff]">
            Sign Up
          </button>
          <p className="text-[#71717A] self-center">
            Already have an accoun?{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                updateSide((prev: boolean) => !prev);
              }}
              className="font-bold text-[#6f00ff]"
            >
              Log In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

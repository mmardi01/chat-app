import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { BsShieldSlash } from "react-icons/bs";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { TfiUser } from "react-icons/tfi";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/features/user/userSlice";
import { useRouter } from "next/navigation";

type Formvalues = {
  username: string;
  password: string;
};

function Login({
  updateSide,
}: {
  updateSide: Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<Formvalues>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const router = useRouter();
  const [ credentialsError, setCredentialsError ] =  useState('');
  const dispatch = useAppDispatch();
  const onSubmit = async (data: Formvalues) => {
    setCredentialsError('')
      const res = await fetch('http://localhost:3333/auth/signin',{
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (res.ok) {
        const userData = await res.json();
        dispatch(login(userData));
        router.push('/')
      }
      else 
        setCredentialsError('Username or Password is incorrect!');
  };

  return (
    <div className="w-1/2 h-full flex justify-center items-center text-[#09090B]">
      <div className="flex flex-col items-center  gap-2">
        <div>
          <h1 className="font-bold text-4xl">Login to your Account</h1>
          <p className="text-md text-[#71717A] mt-1">
            Welcome back! Select method to log in:
          </p>
        </div>
        <div className="w-full flex font-[400] text-xl my-2 gap-2">
          <button className="w-[180px] h-[55px] rounded-[16px] border border-[#6f00ff72] flex items-center justify-center gap-2 ">
            <Image
              className="w-auto h-auto"
              src={"/google.png"}
              alt="icon"
              width={20}
              height={20}
            />
            <p>Google</p>
          </button>
          <button className="w-[180px] h-[55px] rounded-[16px] border border-[#6f00ff72] flex items-center justify-center gap-2">
            <Image
              className="w-auto h-auto"
              src={"/facebook.png"}
              alt="icon"
              width={24}
              height={24}
            />
            <p>Facebook</p>
          </button>
        </div>
        <div className="flex  gap-2 items-center my-2">
          <span className="h-[0.5px] w-[110px] bg-[#71717A]"></span>
          <p className="text-[#71717A] text-[12px]">or continue with email</p>
          <span className="h-[0.5px] w-[110px] bg-[#71717A]"></span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[90%] gap-6"
        >
          <div className="relative">
            <input
              className={`bg-[#6f00ff27] pl-12  border ${
                errors.username
                  ? "border-[#ff2c2c] placeholder:text-[#ff2c2c]"
                  : "border-[#6E00FF] placeholder:text-[#6f00ff4b]"
              } outline-none w-full h-[55px] rounded-xl`}
              type="text"
              placeholder="Username"
              {...register("username", {
                required: "this field is required",
              })}
            />
            <TfiUser
              className={`absolute top-[18px] left-4 text-xl ${
                errors.username ? "text-[#ff2c2c]" : "text-[#6f00ff4b]"
              }`}
            />
            <p className="absolute text-sm right-1 text-[#ff2c2c]">
              {errors.username?.message}
            </p>
          </div>
          <div className="relative">
            <input
              className={`bg-[#6f00ff27] pl-12  border ${
                errors.password
                  ? "border-[#ff2c2c] placeholder:text-[#ff2c2c]"
                  : "border-[#6E00FF] placeholder:text-[#6f00ff4b]"
              } outline-none w-full h-[55px] rounded-xl`}
              placeholder="Password"
              type="password"
              {...register("password", {
                required: "this field is required",
              })}
            ></input>
            <BsShieldSlash
              className={`absolute top-[16px] left-3 text-2xl ${
                errors.password ? "text-[#ff2c2c]" : "text-[#6f00ff4b]"
              }`}
            />
            <p className="absolute text-sm right-1 text-[#ff2c2c]">
              {errors.password?.message}
            </p>
          </div>
          <p className="text-sm text-[#ff2c2c]">
              {credentialsError}
          </p>
          <div className="flex items-center gap-2">
            <GrCheckbox className="text-xl text-[#6f00ff]" />
            <p className="text-[#71717A] font-light">Remember me</p>
            <p className="ml-auto font-bold text-[#6f00ff]">Forgot Password?</p>
          </div>
          <button
            type="submit"
            className="w-[full text-white font-bold text-xl h-[55px] rounded-xl bg-[#6f00ff]"
          >
            Log In
          </button>
          <p className="text-[#71717A] self-center">
            Don’t have account?{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                updateSide((prev: boolean) => !prev);
              }}
              className="font-bold text-[#6f00ff]"
            >
              Create an account
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

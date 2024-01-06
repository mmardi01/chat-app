import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { TfiUser } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";
import { BsShieldSlash } from "react-icons/bs";
import {  useDispatch } from "react-redux";
import { login } from "@/features/user/userSlice";

type Formvalues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function Signup({
  updateSide,
}: {
  updateSide: Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<Formvalues>();
  const { register,  handleSubmit, formState } = form;
  const { errors } = formState;
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const dispatch = useDispatch();


  const onSubmit = async (data: Formvalues) => {
    try {
      const res = await fetch("http://localhost:3333/auth/signup", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userData = await res.json();
      dispatch(login(userData));
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

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
          className="flex flex-col w-[90%] gap-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="relative">
            <input
              id="username"
              className={`bg-[#6f00ff27] pl-12  border ${
                errors.username
                  ? "border-[#ff2c2c] placeholder:text-[#ff2c2c]"
                  : "border-[#6E00FF] placeholder:text-[#6f00ff4b]"
              } outline-none w-full h-[55px] rounded-xl`}
              type="text"
              placeholder="Username"
              {...register("username", {
                required: "this field is required",
                maxLength: {
                  value: 15,
                  message: "username should be between 4-15 characters",
                },
                minLength: {
                  value: 4,
                  message: "username should be between 4-15 characters",
                },
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
              id="email"
              className={`bg-[#6f00ff27] pl-12  border ${
                errors.email
                  ? "border-[#ff2c2c] placeholder:text-[#ff2c2c]"
                  : "border-[#6E00FF] placeholder:text-[#6f00ff4b]"
              } outline-none w-full h-[55px] rounded-xl`}
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "this field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <CiMail
              className={`absolute top-[16px] left-4 text-2xl ${
                errors.email ? "text-[#ff2c2c]" : "text-[#6f00ff4b]"
              }`}
            />
            <p className="absolute text-sm right-1 text-[#ff2c2c]">
              {errors.email?.message}
            </p>
          </div>
          <div className="relative">
            <input
              id="password"
              className={`bg-[#6f00ff27] pl-12  border ${
                errors.password
                  ? "border-[#ff2c2c] placeholder:text-[#ff2c2c]"
                  : "border-[#6E00FF] placeholder:text-[#6f00ff4b]"
              } outline-none w-full h-[55px] rounded-xl`}
              placeholder="Password"
              type="password"
              {...register("password", {
                required: "this field is required",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i,
                  message: "invalid password",
                },
                minLength: {
                  value: 8,
                  message: "invalid password",
                },
              })}
            ></input>
            <BsShieldSlash
              className={`absolute top-[16px] left-4 text-2xl ${
                errors.password ? "text-[#ff2c2c]" : "text-[#6f00ff4b]"
              }`}
            />
            <p className="absolute text-sm right-1 text-[#ff2c2c]">
              {errors.password?.message}
            </p>
          </div>
          <div className="relative">
            <input
              id="confirm"
              className={`bg-[#6f00ff27] pl-12  border ${
                errors.confirmPassword
                  ? "border-[#ff2c2c] placeholder:text-[#ff2c2c]"
                  : "border-[#6E00FF] placeholder:text-[#6f00ff4b]"
              } outline-none w-full h-[55px] rounded-xl`}
              placeholder="Confirm Password"
              type="password"
              {...register("confirmPassword", {
                required: "this field is required",
              })}
            ></input>
            <p className="absolute text-sm right-1 text-[#ff2c2c]">
              {errors.confirmPassword?.message}
            </p>

            <BsShieldSlash
              className={`absolute top-[16px] left-4 text-2xl ${
                errors.confirmPassword ? "text-[#ff2c2c]" : "text-[#6f00ff4b]"
              }`}
            />
          </div>
          <button
            type="submit"
            className="w-[full text-white font-bold text-xl h-[55px] rounded-xl bg-[#6f00ff]"
          >
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
        {/* <DevTool control={control} /> */}
      </div>
    </div>
  );
}

export default Signup;

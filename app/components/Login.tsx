"use client";
import React, { FC, useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import Loading from "./Loading";

type Props = {};

const Login: FC<Props> = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isSuccess, error, isLoading }] = useLoginMutation();

  const SignInSchema = z.object({
    email: z
      .string()
      .min(1, {
        message: "Email is required",
      })
      .email({
        message: "Not valid email",
      }),
    password: z
      .string()
      .min(7, {
        message: "Password must be at least 7 characters",
      })
      .max(35, {
        message: "The password must not exceed 35 letter",
      }),
  });
  type InSignIn = z.infer<typeof SignInSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitted },
    reset,
  } = useForm<InSignIn>({
    mode: "onChange",
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<InSignIn> = async ({ email, password }) => {
    await login({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login successfully");
      redirect("/dashboard");
    }

    if (error) {
      toast.error("Invalid email or password");
    }
  }, [isSuccess, error]);

  return (
    <div className={`flex justify-center items-center mt-52 mb-12 flex-col`}>
      <h1 className={`text-[35px] font-bold  `}>
        Hello <span className={`text-primary`}>Rockies</span>
      </h1>
      <p className={`text-muted-foreground text-[18px]  p-2 mb-2 text-center`}>
        Sign In and make every day a success
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`relative ${
            errors.email ? "mb-10" : "mb-3"
          } !w-[350px] 800px:!w-[450px] mx-auto transition-all `}
        >
          <input
            type="email"
            className="peer m-0 block h-[60px] w-full rounded-lg border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="name@example.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span
              className={`absolute -bottom-7 px-2 text-[14px] text-red-600`}
            >
              {errors.email.message}
            </span>
          )}
          <label
            htmlFor="floatingInput"
            className={`pointer-events-none absolute top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-focus:text-[14px] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary`}
          >
            Email
          </label>
        </div>

        <div
          className={`relative ${
            errors.password ? "mb-10" : "mb-3"
          }  !w-[350px] 800px:!w-[450px] mx-auto transition-all`}
        >
          <input
            type={!showPassword ? "password" : "text"}
            className={`peer m-0 block h-[60px] w-full rounded-lg border border-solid border-secondary-500 bg-transparent bg-clip-padding pl-3 pr-12 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-twe-primary focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]`}
            id="floatingPassword"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span
              className={`absolute -bottom-7 px-2 text-[14px] text-red-600`}
            >
              {errors.password?.message}
            </span>
          )}
          <label
            htmlFor="floatingPassword"
            className={`pointer-events-none absolute  top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-focus:text-[14px] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary`}
          >
            Password
          </label>
          {!showPassword ? (
            <Button
              type="button"
              variant="ghost"
              className={`absolute bottom-2 right-2 z-1  !p-1 rounded-full`}
              onClick={() => setShowPassword(true)}
            >
              <AiOutlineEyeInvisible
                size={25}
                className={`text-black dark:text-white `}
              />
            </Button>
          ) : (
            <Button
              type="button"
              variant="ghost"
              className={`absolute bottom-2 right-2  z-1 !p-1 rounded-full`}
              onClick={() => setShowPassword(false)}
            >
              <AiOutlineEye
                size={25}
                className={` text-black dark:text-white `}
              />
            </Button>
          )}
        </div>
        <Button
          type="submit"
          className={`!w-[350px] 800px:!w-[450px] !rounded-full !z-10 mx-auto mb-3 !py-6 flex justify-center items-center mt-6`}
        >
          {isLoading ? <Loading /> : "Sign In"}
        </Button>
      </form>
    </div>
  );
};

export default Login;

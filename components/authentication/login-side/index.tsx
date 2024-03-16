"use client";
import React from "react";
import LoginForm from "./form";
import Image from "next/image";

function LoginSide() {
  return (
    <div className="flex h-dvh justify-center md:justify-start items-center dark:bg-slate-950">
      <div className="flex-[0.5] flex justify-center items-center">
        <LoginForm />
      </div>
      <div className="flex-[0.5] h-full hidden md:block">
        <Image
          alt="image"
          width={1000}
          height={400}
          className="w-full h-full object-cover"
          src={
            "https://images.unsplash.com/photo-1501891037204-8754d498396b?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </div>
  );
}

export default LoginSide;

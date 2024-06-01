import {  ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className=" min-h-screen grid grid-cols-1 lg:grid grid-cols-2">
      <div className="grid col-span-1 h-full w-full flex flex-col items-center justify-center">
        <div className="text-4xl center  px-16 ">Welcome Back!</div>

        <div className="mb-[48px] flex justify-center items-center">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>

            <Loader2 className="animate-spin text-muted-foreground   mb-[120px]" />
          </ClerkLoading>
        </div>
      </div>
      <div className="hidden lg:grid grid-col-span-1 lg:h-full lg:w-full lg:bg-blue-600 lg:flex justify-center items-center">
        <Image src={"/logo.svg"} alt="Logo" height={100} width={100}></Image>
      </div>
    </div>
  )
}
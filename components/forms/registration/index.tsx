import React from "react";

import { GenderSelect } from "./gender";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DateOfBirth from "./date-of-birth/date-of-birth";
import PhoneNumberInput from "./phone-number/phone-number-input";

function Registration() {
  return (
    <div className="dark:bg-slate-950 dark:text-white flex justify-center items-center min-h-dvh p-4 md:px-[50px] lg:px-[100px] xl:px-[200px]">
      <div className="md:p-5 lg:p-10 h-full w-full rounded-lg border dark:border-slate-800 flex flex-col lg:flex-row lg:gap-10">
        <div className="p-4 lg:p-0">
          <p className="text-2xl font-bold">Registration</p>
          <p className="text-sm text-slate-800 dark:text-slate-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-full">
          <form className="w-full">
            <div className="space-y-4 lg:w-[70%] p-4 lg:border-l dark:border-slate-800 lg:pl-10 ">
              <p className="font-bold">Personal Information</p>
              <div className="flex gap-3">
                <div className="w-full space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" />
                </div>
                <div className="w-full space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <div className="w-full space-y-2">
                  <Label>Date of birth</Label>
                  <DateOfBirth />
                </div>
                <div className="w-full space-y-2">
                  <Label>Gender</Label>
                  <GenderSelect />
                </div>
              </div>

              <div className="space-y-2 w-[80%] lg:w-[50%]">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
              <div className="space-y-2 w-[80%] lg:w-[50%]">
                <Label htmlFor="phone">Phone</Label>
                <PhoneNumberInput />
              </div>

              <div className="space-y-2 w-[80%] lg:w-[60%]">
                <Label htmlFor="address">Address</Label>
                <Input id="address" />
              </div>
              <div className="flex gap-3">
                <div className="space-y-2 w-full">
                  <Label htmlFor="addressLine1">Address Line 1</Label>
                  <Input id="addressLine1" />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="addressLine2">Address Line 2</Label>
                  <Input id="addressLine2" />
                </div>
              </div>
              <div className="space-y-2 w-[80%] lg:w-[40%]">
                <Label htmlFor="city">City</Label>
                <Input id="city" />
              </div>
              <div className="space-y-2 w-[80%] lg:w-[40%]">
                <Label htmlFor="state">State</Label>
                <Input id="state" />
              </div>
              <div className="space-y-2 w-[50%]">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input id="zipCode" />
              </div>
            </div>
            <div className="flex justify-end p-4 w-full">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;

import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CountrySelect } from "./country/country-lists";
import PhoneNumberInput from "./phone-number/phone-number-input";

import { countries } from "./data";

function PersonalDetails() {
  return (
    <div className="dark:bg-slate-950 dark:text-white flex justify-center items-center min-h-dvh p-4 md:px-[50px] lg:px-[100px] xl:px-[200px]">
      <div className="w-full rounded-lg p-4 border dark:border-slate-800">
        <div>
          <p className="text-2xl">Personal Details</p>
          <p className="text-sm text-slate-800 dark:text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deleniti animi illum. Optio et deleniti.
          </p>
        </div>
        <Separator className="my-8" />
        <form action="">
          <div className="space-y-3 lg:space-y-0 lg:flex gap-3">
            <div className="space-y-4 w-full border rounded-lg p-4 dark:border-slate-800">
              <p className="font-bold">Personal Information</p>
              <div className="flex gap-3">
                <div className="w-full">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" />
                </div>
                <div className="w-full">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" />
                </div>
              </div>
              <div className="w-[80%] lg:w-[50%]">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
              <div className="w-[80%] lg:w-[50%]">
                <Label htmlFor="phone">Phone</Label>
                <PhoneNumberInput />
              </div>
              <div className="w-[40%]">
                <Label htmlFor="country">Country</Label>
                <CountrySelect
                  title="Select country"
                  data={countries}
                  showIcon
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input id="website" />
              </div>
            </div>

            <div className="space-y-4 w-full border rounded-lg p-4 dark:border-slate-800">
              <p className="font-bold">Location</p>
              <div className="w-[80%] lg:w-[60%]">
                <Label htmlFor="address">Address</Label>
                <Input id="address" />
              </div>
              <div className="flex gap-3">
                <div className="w-full">
                  <Label htmlFor="addressLine1">Address Line 1</Label>
                  <Input id="addressLine1" />
                </div>
                <div className="w-full">
                  <Label htmlFor="addressLine2">Address Line 2</Label>
                  <Input id="addressLine2" />
                </div>
              </div>
              <div className="w-[80%] lg:w-[40%]">
                <Label htmlFor="homePhone">Home Phone</Label>
                <PhoneNumberInput />
              </div>
              <div className="w-[80%] lg:w-[40%]">
                <Label htmlFor="city">City</Label>
                <Input id="city" />
              </div>
              <div className="w-[80%] lg:w-[40%]">
                <Label htmlFor="state">State</Label>
                <Input id="state" />
              </div>
              <div className="w-[50%]">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input id="zipCode" />
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-4">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetails;

import React from "react";

import UserAvatar from "./avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "./image-upload/image-upload";
import { Separator } from "@/components/ui/separator";
import { InputFile } from "./image-select/image-select";
import LeftMenuItems from "./left-menu/left-menu-items";
import { CountrySelect } from "./country/country-lists";
import { ScrollArea } from "@/components/ui/scroll-area";
import PhoneNumberInput from "./phone-number/phone-number-input";
import SecurityQuestion from "./security-questions/security-question-select";

import { countries } from "./data";

function Classic() {
  return (
    <div className="p-5 px-52 dark:bg-slate-950 dark:text-white h-dvh">
      <div className="flex w-full border dark:border-slate-800 rounded-lg h-[90vh]">
        <div className="h-ful border-r dark:border-slate-800">
          <LeftMenuItems />
        </div>
        <ScrollArea className="w-full py-4 h-full">
          <div className="pl-4">
            <p className="text-2xl font-bold">Settings</p>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-2">
              Make changes to your personal account, and click save to apply
              changes.
            </p>
          </div>

          <Separator className="my-5" />

          <form className="mt-5">
            <div className="grid gap-4">
              <div className="pl-4 space-y-4">
                <div>
                  <p className="font-bold">Personal information</p>
                </div>
                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="firstName">First Name</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      Your first name will be public.
                    </p>
                  </div>
                  <Input id="firstName" className="w-[300px]" />
                </div>
                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="lastName">Last Name</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      Your last name will be public.
                    </p>
                  </div>
                  <Input id="lastName" className="w-[300px]" />
                </div>
              </div>

              <Separator className="my-5" />
              <div className="pl-4 space-y-4">
                <p className="font-bold">Contact information</p>
                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="">Phone</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      Your phone number is made public
                    </p>
                  </div>
                  <div className="w-[250px]">
                    <PhoneNumberInput />
                  </div>
                </div>

                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="">Country</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      The country you are from.
                    </p>
                  </div>
                  <div className="w-[250px]">
                    <CountrySelect
                      title="Select country"
                      data={countries}
                      showIcon
                    />
                  </div>
                </div>

                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="location">Location</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      Your current location, this won&apos;t be made public.
                    </p>
                  </div>
                  <Input id="location" className="w-[300px]" />
                </div>
                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="streetAddress">Street address</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      Your current street address.
                    </p>
                  </div>
                  <Input id="streetAddress" className="w-[300px]" />
                </div>
              </div>

              <Separator className="my-5" />
              <div className="pl-4 space-y-4">
                <p className="font-bold">Profile details</p>
                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="lastName">Profile photo</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      Your profile shown to other people.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <UserAvatar />
                    {/* <Button type="button">Change</Button> */}
                    <InputFile />
                  </div>
                </div>

                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="lastName">Cover photo</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      Your cover image.
                    </p>
                  </div>
                  <div className="w-[600px]">
                    <ImageUpload />
                  </div>
                </div>

                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="introduction">Introduction</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      Say something about yourself.
                    </p>
                  </div>
                  <Textarea id="introduction" className="w-[600px] h-[150px]" />
                </div>
              </div>
              <Separator className="my-5" />

              <div className="pl-4 space-y-4">
                <div>
                  <p className="font-bold">Account information</p>
                </div>
                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      Your current password.
                    </p>
                  </div>
                  <Input
                    id="currentPassword"
                    type="password"
                    className="w-[300px]"
                  />
                </div>
                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="newPassword">New Password</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      Your new password.
                    </p>
                  </div>
                  <Input
                    id="newPassword"
                    type="password"
                    className="w-[300px]"
                  />
                </div>
                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="securityQuestion">Security question</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      Select your security question.
                    </p>
                  </div>
                  <div className="w-[350px]">
                    <SecurityQuestion />
                  </div>
                </div>

                <div className="w-full flex gap-5 items-start">
                  <div className="shrink-0 space-y-2 w-[300px]">
                    <Label htmlFor="email">Email</Label>
                    <p className="text-sm text-slate-800 dark:text-slate-400">
                      Your email address.
                    </p>
                  </div>
                  <Input id="email" typeof="email" className="w-[340px]" />
                </div>
              </div>
            </div>
            <div className="w-full justify-end flex gap-3 pt-4 pr-4">
              <Button variant={"outline"}>Discard</Button>
              <Button>Save</Button>
            </div>
          </form>
        </ScrollArea>
      </div>
    </div>
  );
}

export default Classic;

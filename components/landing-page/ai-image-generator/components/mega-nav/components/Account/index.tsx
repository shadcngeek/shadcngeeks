import React from "react";

import Link from "next/link";

import {
  Mail,
  Plus,
  User,
  Users,
  Cloud,
  Github,
  LogOut,
  Settings,
  Keyboard,
  LifeBuoy,
  UserPlus,
  PlusCircle,
  CreditCard,
  MessageSquare,
} from "lucide-react";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function AccountSettings() {
  return (
    <div className="text-slate-900 dark:text-white">
      <Separator className="my-3" />
      <ul>
        <Link href={"#"}>
          <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </li>
        </Link>
        <Link href={"#"}>
          <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </li>
        </Link>
        <Link href={"#"}>
          <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </li>
        </Link>
        <Link href={"#"}>
          <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
          </li>
        </Link>
      </ul>
      <Separator className="my-3" />
      <ul>
        <Link href={"#"}>
          <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </li>
        </Link>
        <ul>
          <div className="py-3 px-4 flex items-center gap-2">
            <UserPlus className="mr-2 h-4 w-4" />
            <Label>Invite users</Label>
          </div>
          <ul className="ml-6">
            <Link href={"#"}>
              <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </li>
            </Link>
            <Link href={"#"}>
              <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>Message</span>
              </li>
            </Link>
            <Separator className="my-3" />
            <Link href={"#"}>
              <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>More...</span>
              </li>
            </Link>
          </ul>
        </ul>
        <Link href={"#"}>
          <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
          </li>
        </Link>
      </ul>
      <Separator className="my-3" />
      <Link href={"#"}>
        <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </li>
      </Link>
      <Link href={"#"}>
        <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </li>
      </Link>
      <Link href={"#"}>
        <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </li>
      </Link>
      <Separator className="my-3" />
      <Link href={"#"}>
        <li className="dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500  rounded-md py-3 px-4 flex items-center gap-2">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </li>
      </Link>
    </div>
  );
}

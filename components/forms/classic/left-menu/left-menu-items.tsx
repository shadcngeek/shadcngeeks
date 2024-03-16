"use client";
import React from "react";

import ListItem from "../list-item/list-item";
import { Input } from "@/components/ui/input";

import { accountItems, helpItems, listItems } from "../data";

function LeftMenuItems() {
  return (
    <div className="dark:bg-slate-950 md:w-[300px] shrink-0 mt-1">
      <div className="p-3">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Search..." />
        </form>
      </div>
      <p className="text-slate-500 pl-4 mb-4">Menu</p>
      {listItems.map(({ icon, title, isActive }) => (
        <ListItem key={title} icon={icon} title={title} isActive={isActive} />
      ))}
      <div className="mt-5">
        <p className="text-slate-500 pl-4 my-4">Contact</p>
        {helpItems.map(({ icon, title }) => (
          <ListItem key={title} icon={icon} title={title} />
        ))}
      </div>

      <div className="mt-5">
        <p className="text-slate-500 pl-4 mb-4">Settings</p>
        {accountItems.map(({ icon, title }) => (
          <ListItem key={title} icon={icon} title={title} />
        ))}
      </div>
    </div>
  );
}

export default LeftMenuItems;

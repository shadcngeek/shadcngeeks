"use client";

import * as React from "react";

import { useAtom } from "jotai";

import { Input } from "@/components/ui/input";
import { dbMessagesAtom } from "../jotaiAtoms/atoms";

import { messages } from "../data/db";

export function SearchUsers() {
  const [, setDbMessage] = useAtom(dbMessagesAtom);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const results = messages.filter((message) =>
      message.fullName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDbMessage(results);
  };

  return (
    <Input onChange={(e) => handleSearch(e)} placeholder="Search people..." />
  );
}

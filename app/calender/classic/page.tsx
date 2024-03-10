import React from "react";

import { Metadata } from "next";

import ClassicCalender from "@/components/calender/classic";

export const metadata: Metadata = {
  title: "Calender",
  description: "A Predesigned calender.",
};

export default function Calender() {
  return <ClassicCalender />;
}

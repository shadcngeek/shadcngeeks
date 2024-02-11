"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { pages } from "../../data/pages";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import handleDownloadZip from "@/actions/handleDownloadZip";
import handleGetFolderPath from "@/actions/handleGetFolderPath";
import Wrapper from "../wrapper";

function LandingPage() {
  return <Wrapper parentFolder="landing-page" />;
}

export default LandingPage;

import { Metadata } from "next";

import LoginSide from "@/components/authentication/login-side";

export const metadata: Metadata = {
  title: "Authentication",
  description: "A predesigned login form.",
};

export default function page() {
  return <LoginSide />;
}

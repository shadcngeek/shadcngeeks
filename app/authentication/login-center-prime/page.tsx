import { Metadata } from "next";

import LoginCenterPrime from "@/components/authentication/login-center-prime";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Predesigned authentication form.",
};

export default function Page() {
  return (
    <div className="space-y-5">
      <LoginCenterPrime />
    </div>
  );
}

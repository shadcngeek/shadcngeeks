import { Metadata } from "next";

import LoginCenterMain from "@/components/authentication/login-center";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Predesigned authentication form.",
};

export default function Page() {
  return (
    <div className="space-y-5">
      <LoginCenterMain />
    </div>
  );
}

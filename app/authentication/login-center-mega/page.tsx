import { Metadata } from "next";

import LoginCenterMegaMain from "@/components/authentication/login-center-mega";

export const metadata: Metadata = {
  title: "Authentication",
  description: "A predesigned login form.",
};

export default function Page() {
  return (
    <div className="space-y-5">
      <LoginCenterMegaMain />
    </div>
  );
}

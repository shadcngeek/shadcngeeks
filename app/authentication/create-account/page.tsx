import { Metadata } from "next";

import AuthenticationComponent from "@/components/authentication/acme/authentication-component";

export const metadata: Metadata = {
  title: "Authentication",
  description: "A predesigned authentication form.",
};

export default function AuthenticationPage() {
  return (
    <div className="space-y-5">
      <AuthenticationComponent />
    </div>
  );
}

import React from "react";
import Logo from "./Logo";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function FooterCenter() {
  return (
    <Card>
      <CardHeader className="flex-row justify-center w-full">
        <div>
          <div className="w-fit mx-auto ">
            <Logo />
          </div>
          <p className="dark:text-slate-400 text-slate-700 text-center text-sm">
            © 2024 FlexyGrid, Inc
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 text-center dark:text-slate-400 text-slate-700">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis
          neque sint dignissimos. Maxime veniam odio quaerat, earum voluptatum
          non omnis doloribus dignissimos dolorem necessitatibus ab, nulla animi
          corporis. Numquam eum temporibus voluptatum beatae inventore voluptate
          ducimus modi distinctio quidem?
        </p>
      </CardContent>
    </Card>
  );
}

export default FooterCenter;

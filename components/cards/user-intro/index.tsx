import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  GithubIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";

export function UserIntro() {
  return (
    <Card className="w-[350px] overflow-hidden">
      <CardContent className="p-0">
        <div>
          <div className="relative">
            <Image
              alt="image"
              className="w-full"
              src={
                "https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={550}
              height={550}
            />
            <div className="rounded-full overflow-hidden border-2 w-fit absolute bottom-0 translate-y-[50%] ml-5">
              <Image
                alt="image"
                src={
                  "https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                width={75}
                height={75}
              />
            </div>
          </div>
          <div className="p-6 mt-7">
            <p className="text-2xl">Richard Doe</p>
            <p className="text-sm text-slate-700 dark:text-slate-400">
              Python Developer
            </p>
            <p className="mt-4 text-slate-700 dark:text-slate-400">
              Passion is the fuel for a fulfilling life. Explore various
              interests, follow your curiosity, and dive into activities that
              ignite your enthusiasm. Your true passion might be hidden in
              unexpected places, waiting to be discovered and pursued with
              unwavering dedication.
            </p>
            <div className="flex gap-3 mt-5">
              <FacebookIcon
                size={15}
                className="text-slate-700 dark:text-slate-400"
              />
              <TwitterIcon
                size={15}
                className="text-slate-700 dark:text-slate-400"
              />
              <InstagramIcon
                size={15}
                className="text-slate-700 dark:text-slate-400"
              />
              <GithubIcon
                size={15}
                className="text-slate-700 dark:text-slate-400"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

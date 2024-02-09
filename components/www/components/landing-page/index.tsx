import React from "react";
import Link from "next/link";
import Image from "next/image";

import { pages } from "../../data/pages";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function LandingPage() {
  return (
    <div className="px-[200px] dark:bg-slate-950 pt-10">
      <div className="grid grid-cols-2 gap-3 flex-wrap">
        {pages["landing-page"].subPath.map(({ path, imageSrc }) => (
          <div key={path} className="mb-10">
            <div className="flex justify-end gap-3 pb-3">
              <Link
                target="_blank"
                href={`landing-page/${path}`}
                className="flex items-center justify-center dark:text-white px-3 rounded-md border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50"
              >
                Preview
              </Link>

              <Button>Download</Button>
            </div>
            <Card className="w-fit">
              <CardContent className="p-0">
                <Image
                  width={950}
                  height={500}
                  src={imageSrc}
                  alt="image preview"
                  className="rounded-md"
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;

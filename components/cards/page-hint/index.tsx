import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

function PageHint() {
  return (
    <div>
      <Link href="#">
        <Card className="w-fit hover:dark:border-rose-600 hover:border-rose-600 transition">
          <CardContent className="p-6 text-slate-500 hover:text-rose-600 transition">
            <Image
              alt="image"
              width={300}
              height={300}
              src={"/images/www/svg/cards.svg"}
            />
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default PageHint;

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

import { products } from "./data";

function ProductListSmallDevice() {
  return (
    <div className="space-y-3">
      {products.map(({ deliveryDate, name, price, imgSrc, reviews }) => (
        <Card key={name}>
          <CardContent className="p-2 xl:p-6 flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="rounded-lg overflow-hidden h-20 w-20 md:h-32 md:w-32 2xl:h-44 2xl:w-44 shrink-0">
                <Image
                  width={500}
                  height={500}
                  src={imgSrc}
                  alt="Product"
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="w-full">
                <div className="">
                  <h4>{name}</h4>
                  <p className="text-2xl font-semibold">${price}</p>
                </div>

                <div>
                  <div className="flex w-full justify-between items-center">
                    <div className="flex">
                      <StarFilledIcon className="text-orange-500" />
                      <StarFilledIcon className="text-orange-500" />
                      <StarFilledIcon className="text-orange-500" />
                      <StarFilledIcon className="text-orange-500" />
                      <StarIcon className="w-4 h-4 text-orange-500" />
                    </div>
                    <div className="w-full flex justify-end">
                      <Link
                        href={"#"}
                        className="text-blue-500 hover:underline"
                      >
                        Reviews
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full space-y-2">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <p className="text-sm text-slate-700 dark:text-slate-400">
                    Delivery: {deliveryDate}
                  </p>
                </div>

                <div>
                  <Button className="bg-violet-500 dark:bg-violet-500 hover:bg-violet-600 dark:hover:bg-violet-600 dark:text-white">
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ProductListSmallDevice;

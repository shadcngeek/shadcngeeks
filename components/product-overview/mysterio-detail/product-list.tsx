import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import ProductListSmallDevice from "./product-list-sm";
import { Card, CardContent } from "@/components/ui/card";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

import { products } from "./data";

function ProductList() {
  return (
    <div>
      <div className="sm:hidden">
        <ProductListSmallDevice />
      </div>
      <div className="hidden space-y-3 sm:block">
        {products.map(({ deliveryDate, name, price, imgSrc, reviews }) => (
          <Card key={name}>
            <CardContent className="p-6 flex gap-5">
              <div className="rounded-lg overflow-hidden h-44 w-44 shrink-0">
                <Image
                  width={500}
                  height={500}
                  src={imgSrc}
                  alt="Product"
                  className="w-full h-full object-fill"
                />
              </div>

              <div className="w-full space-y-2">
                <div>
                  <h4 className="text-2xl">{name}</h4>
                  <div className="flex gap-1 items-center">
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
                        See all {reviews} reviews
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-2xl font-semibold">${price}</p>
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

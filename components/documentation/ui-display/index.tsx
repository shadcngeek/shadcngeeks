import React from "react";

import { Next } from "./components/next";
import PriceUI from "./components/price-ui";
import SideNav from "./components/side-nav";
import { Input } from "@/components/ui/input";
import { Previous } from "./components/previous";
import CodePreview from "./components/code-preview";
import { SheetDrawer } from "./components/sheet-drawer";
import { CodePreviewTabs } from "./components/code-preview-tabs";
import PaymentMethodVariantCard from "./components/payment-method-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  allPriceUIs,
  allSnippets,
  allPaymentMethods,
} from "@/.contentlayer/generated";

function UIDisplayDocs() {
  return (
    <>
      <div
        style={{ display: "" }}
        className="md:hidden p-4 border-b dark:border-slate-800 flex gap-3 items-center"
      >
        <SheetDrawer />
        <Input
          className="max-w-[300px]"
          placeholder="Search documentation..."
        />
      </div>
      <div className="flex max-w-[1500px] mx-auto relative">
        <div className="relative">
          <SideNav />
        </div>

        <div className="max-w-[1000px] h-fit m-4 md:m-5 2xl:m-10 w-full space-y-5 md:space-y-8 lg:space-y-5">
          <div>
            <div className="space-y-2 md:space-y-3 lg:space-y-5">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold">Card</p>
              <p className="text-slate-700 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                placeat maxime vero unde pariatur id illo repudiandae
                praesentium aperiam magni officia voluptates iure, ab earum
                repellendus voluptatum beatae. Nobis, impedit!
              </p>
            </div>
          </div>

          <Card className="lg:!my-10 bg-slate-100 dark:bg-slate-900">
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <p className="text-slate-700 dark:text-slate-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <p className="text-slate-700 dark:text-slate-400">
                    Dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <p className="text-slate-700 dark:text-slate-400">
                    Atque placeat maxime vero unde pariatur id illo repudiandae.
                  </p>
                </li>
                <li>
                  <p className="text-slate-700 dark:text-slate-400">
                    Praesentium aperiam magni officia .
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <CodePreviewTabs snippet={allPriceUIs[0]}>
            <PriceUI />
          </CodePreviewTabs>

          <div className="space-y-5 lg:!my-10">
            <div className="space-y-2">
              <p className="text-2xl">API</p>
              <p className="text-slate-700 dark:text-slate-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
                tempora, iure quidem iusto soluta cupiditate itaque. Libero
                repellat consequuntur soluta ducimus praesentium. Quo officia
                earum delectus perferendis iusto facilis rem nulla quisquam
                quibusdam quis rerum cumque dignissimos, reiciendis cupiditate,
                nisi porro corporis reprehenderit libero, vitae deleniti nostrum
                autem recusandae ullam?
              </p>
            </div>
            <CodePreview snippet={allSnippets[0]} />
          </div>

          <div className="space-y-2 md:space-y-5">
            <div className="space-y-2 md:space-y-3">
              <p className="text-2xl">Custom components</p>
              <p className="text-slate-700 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                placeat maxime vero unde pariatur id illo repudiandae
                praesentium aperiam magni officia voluptates iure, ab earum
                repellendus voluptatum beatae. Nobis, impedit!
              </p>
            </div>
            <CodePreviewTabs snippet={allPaymentMethods[0]}>
              <PaymentMethodVariantCard />
            </CodePreviewTabs>
          </div>

          <div className="flex gap-3 flex-wrap justify-between">
            <Previous />
            <Next />
          </div>
        </div>
      </div>
    </>
  );
}

export default UIDisplayDocs;

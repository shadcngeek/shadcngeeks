import { Metadata } from "next";
import Image from "next/image";

import { MoveDownRight } from "lucide-react";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Overview } from "./overview/overview";
import { analyticBarData } from "./table/data/data";
import ProductSelling from "./table/product-selling";
import { Statistic } from "./table/components/statistic";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { RecentSales } from "./recent-sales/recent-sales";
import AnalyticCard from "./table/components/analytic-card";
import { CarouselEmbla } from "./table/components/carousal-embla";
import StatisticOverview from "./table/components/statistic-overview";
import { DetailedStatistic } from "./table/components/detailed-statistic";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function AnalyticsDashboard() {
  return (
    <>
      <div className="md:hidden">
        <Image
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
          src="/examples/dashboard-light.png"
        />
        <Image
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
          src="/examples/dashboard-dark.png"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="space-y-2">
                <CarouselEmbla />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Overview />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Recent Sales</CardTitle>
                      <CardDescription>
                        You made 265 sales this month.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSales />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex gap-4 px-8">
          <DetailedStatistic className="w-[50%]" />
          <div className="grid grid-cols-2 gap-4 w-[50%]">
            <Statistic title="Revenue">
              <div className="flex gap-3">
                <p className="text-2xl font-bold">$892,324</p>
                <div className="flex flex-col items-center text-slate-700 dark:text-slate-400">
                  <MoveDownRight size={15} />
                  <p className="text-xs">20%</p>
                </div>
              </div>
            </Statistic>
            <Statistic title="Recent Marketing">
              <div className="flex gap-3">
                <p className="text-2xl font-bold">$760,503</p>
                <div className="flex flex-col items-center text-slate-700 dark:text-slate-400">
                  <MoveDownRight size={15} />
                  <p className="text-xs">20%</p>
                </div>
              </div>
            </Statistic>
            <AnalyticCard
              height={125}
              showAxis={true}
              showContent={false}
              subTitle={"$98,402"}
              title={"Daily Sales"}
              cardContentClassName="pb-0"
              description={"from last month"}
              analyticBarData={analyticBarData}
            />
            <Statistic
              title="Total Shipments"
              graph={<StatisticOverview />}
            ></Statistic>
          </div>
        </div>
        <ProductSelling />
      </div>
    </>
  );
}

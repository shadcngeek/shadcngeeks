import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

function ClassicStatSidedImage() {
  return (
    <Card>
      <CardContent className="p-0 rounded-lg">
        <div className="text-center p-10 space-y-2">
          <p className="text-3xl lg:text-5xl font-bold">
            Trusted by designers worldwide
          </p>
          <p className=" text-slate-500 dark:text-slate-400  shrink max-w-[600px] mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptate mollitia inventore quis minus debitis nesciunt nobis et
            reiciendis non.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center border rounded-lg dark:border-slate-800 m-5">
          <div className="space-y-2 w-full lg:w-[700px] flex-[50%]">
            <Image
              className="rounded-lg"
              alt="people celebrating"
              width={2070}
              height={1080}
              src={
                "https://images.unsplash.com/photo-1695891583421-3cbbf1c2e3bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-5 flex-[50%] p-4 lg:pr-10">
            <Card className="w-full h-44 flex flex-col justify-center">
              <CardContent className="p-2 lg:p-6">
                <div className="text-center space-y-2">
                  <p className="text-2xl lg:text-3xl font-bold">$43 Million</p>
                  <p>Marketing every 1 week</p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full h-44 flex flex-col justify-center">
              <CardContent className="p-2 lg:p-6">
                <div className="text-center space-y-2">
                  <p className="text-2xl lg:text-3xl font-bold">$200 Million</p>
                  <p>Profit every month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full h-44 flex flex-col justify-center">
              <CardContent className="p-2 lg:p-6">
                <div className="text-center space-y-2">
                  <p className="text-2xl lg:text-3xl font-bold">700, 000</p>
                  <p>Requests per day</p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full h-44 flex flex-col justify-center">
              <CardContent className="p-2 lg:p-6">
                <div className="text-center space-y-2">
                  <p className="text-2xl lg:text-3xl font-bold">500, 000</p>
                  <p>Users every day</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ClassicStatSidedImage;

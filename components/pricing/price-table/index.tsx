"use client";
import React from "react";

import Table from "./table";
import PricePackBaseline from "./price-pack-baseline";

function PriceTable() {
  return (
    <>
      <div className="mx-auto text-center mb-10 md:w-[600px] lg:w-[700px] space-y-2">
        <p className="dark:text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
          Choose your plan
        </p>
        <p className="text-slate-700 dark:text-slate-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ut
          amet in accusantium rerum similique aspernatur alias repellat,
          dignissimos consectetur, possimus mollitia ullam.
        </p>
      </div>

      <div className="border dark:border-slate-800 rounded-lg overflow-hidden">
        <div className="hidden lg:block">
          <Table />
        </div>
        <div className="block lg:hidden">
          <PricePackBaseline />
        </div>
      </div>
    </>
  );
}

export default PriceTable;

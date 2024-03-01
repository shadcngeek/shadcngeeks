import React from "react";

import ClassicStat from "./classic-stat/classic-stat";
import ClassicCard from "./classic-card/classic-stat";
import ClassicCardIcon from "./classic-card-icon/classic-stat-icon";
import ClassicStatSided from "./classic-stat-sided/classic-stat-sided";
import ClassicStatSidedImage from "./classic-stat-sided-mage/classic-stat-sided-image";

function Statistics() {
  return (
    <div className="py-10 px-[200px] space-y-5 dark:bg-slate-950">
      <ClassicStat />
      <ClassicCard />
      <ClassicStatSided />
      <ClassicCardIcon />
      <ClassicStatSidedImage />
    </div>
  );
}

export default Statistics;

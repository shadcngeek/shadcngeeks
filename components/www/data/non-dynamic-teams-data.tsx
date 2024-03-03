import { TeamSectionNonDynamicDataTypes } from "../components/team-section/types";

import TeamSided from "@/components/team-section/sided";
import TeamClassic from "@/components/team-section/classic";
import ClassicHigh from "@/components/team-section/classic-high";
import ClassicSquare from "@/components/team-section/classic-square";
import ClassicSublime from "@/components/team-section/classic-sublime";
import ClassicSeparated from "@/components/team-section/classic-separated";
import ClassicHorizontal from "@/components/team-section/classic-horizontal";

export const nonDynamicTeamsData: TeamSectionNonDynamicDataTypes[] = [
  {
    component: <TeamSided />,
    path: "sided",
  },
  {
    component: <TeamClassic />,
    path: "classic",
  },
  {
    component: <ClassicHigh />,
    path: "classic-high",
  },
  {
    component: <ClassicSublime />,
    path: "classic-sublime",
  },
  {
    component: <ClassicSquare />,
    path: "classic-square",
  },
  {
    component: <ClassicHorizontal />,
    path: "classic-horizontal",
  },
  {
    component: <ClassicSeparated />,
    path: "classic-separated",
  },
];

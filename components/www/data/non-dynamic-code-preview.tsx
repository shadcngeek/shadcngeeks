import SimplePreview from "@/components/code/simple";
import SimpleAheadPreview from "@/components/code/simple-ahead";
import { NonDynamicDataTypes } from "../components/statistics/types";
import SimpleAheadCopy from "@/components/code/simple-ahead-copy";
import CodeTitle from "@/components/code/code-title";
import CodeSandbox from "@/components/code/code-sandbox";
import CodeProgress from "@/components/code/progress";

export const nonDynamicCodePreviewData: NonDynamicDataTypes[] = [
  {
    component: <CodeProgress />,
    path: "progress",
  },
  {
    component: <CodeTitle />,
    path: "code-title",
  },
  {
    component: <CodeSandbox />,
    path: "code-sandbox",
  },
  {
    component: <SimpleAheadCopy />,
    path: "simple-ahead-copy",
  },
  {
    component: <SimpleAheadPreview />,
    path: "simple-ahead",
  },
  {
    component: <SimplePreview />,
    path: "simple",
  },
];

import PdfIcon from "./pdf-icon";
import { Card, CardContent } from "@/components/ui/card";

function FileDisplay() {
  return (
    <div>
      <>
        <Card className="dark:bg-slate-800">
          <CardContent className="w-full h-full items-center gap-3 p-0 rounded-md overflow-hidden flex">
            <div className="w-[50px] h-[50px] rounded-lg ">
              <PdfIcon />
            </div>
            <div className="w-full pr-3">
              <p className="text-sm text-blue-500">
                National-Security-Report.pdf
              </p>
            </div>
          </CardContent>
        </Card>
      </>
    </div>
  );
}

export default FileDisplay;

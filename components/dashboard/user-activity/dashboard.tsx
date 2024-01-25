import { MapOverview } from "./components/map";
import { Overview } from "./components/overview";
import { TextBrief } from "./components/text-brief";
import MapStatistic from "./components/map-statistic";
import ReadMoreCard from "./components/read-more-card";
import { Card, CardContent } from "@/components/ui/card";
import { BarchartOverview } from "./components/bar-chart";
import { AnalyticCardContainer } from "./components/analytic-card-container";

export default function UserActivity() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <AnalyticCardContainer />
      <div className="flex gap-4">
        <ReadMoreCard
          title="Inspiration"
          subTitle="Celebrate Progress, Not Perfection"
          description="Perfection is an illusion, but progress is real and tangible. Celebrate every step forward, no matter how small. Each effort contributes to your personal evolution."
        />
        <TextBrief />
      </div>

      <div className="flex gap-4">
        <Card className="w-[50%]">
          <CardContent className="p-6">
            <BarchartOverview />
          </CardContent>
        </Card>

        <Card className="w-[50%]">
          <CardContent className="p-6">
            <Overview />
          </CardContent>
        </Card>
      </div>
      <div className="flex gap-4">
        <Card className="w-[70%]">
          <CardContent className="p-6">
            <MapOverview />
          </CardContent>
        </Card>
        <div className="w-[30%]">
          <MapStatistic />
        </div>
      </div>
    </div>
  );
}

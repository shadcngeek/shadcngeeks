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
    <div className="flex-1 space-y-4 lg:p-8 lg:pt-6">
      <AnalyticCardContainer />
      <div className="md:grid gap-4 md:grid-cols-3">
        <ReadMoreCard
          cardClassName="md:col-start-1 md:col-span-2"
          title="Inspiration"
          subTitle="Courage to Begin Anew"
          description="In every sunrise lies the promise of a new beginning. Summon the courage to let go of yesterday's burdens, embrace today's challenges, and embark on the journey towards your dreams. With each step forward, you rewrite the story of your life."
        />
        <TextBrief />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardContent className="p-6">
            <BarchartOverview />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardContent className="p-6">
            <Overview />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="col-start-1 md:col-span-2">
          <CardContent className="p-6">
            <MapOverview />
          </CardContent>
        </Card>
        <div className="md:col-start-3">
          <MapStatistic />
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/jsx-key */
import { News } from "@/components/cards/news";
import { Next } from "@/components/cards/next";
import { Price } from "@/components/cards/price";
import { Shoe } from "@/components/cards/shoe-card";
import { Revenue } from "@/components/cards/revenue";
import { Netflix } from "@/components/cards/netflix";
import { Previous } from "@/components/cards/previous";
import { PricePro } from "@/components/cards/price-pro";
import BarDisplay from "@/components/cards/bar-display";
import { Character } from "@/components/cards/character";
import { TextBrief } from "@/components/cards/text-brief";
import { UserIntro } from "@/components/cards/user-intro";
import { AboutUser } from "@/components/cards/about-user";
import { ShareFile } from "@/components/cards/share-file";
import { Activities } from "@/components/cards/activities";
import { AvatarMore } from "@/components/cards/avatar-more";
import { SocialMenu } from "@/components/cards/social-menu";
import RevenueAmount from "@/components/cards/revenue-amount";
import { RangeFilter } from "@/components/cards/range-filter";
import TinyLineChart from "@/components/cards/tiny-line-chart";
import { ErrorMessage } from "@/components/cards/error-message";
import { UserProgress } from "@/components/cards/user-progress";
import { FeedbackRate } from "@/components/cards/feedback-rate";
import { SocialCounts } from "@/components/cards/social-counts";
import { UserFollowers } from "@/components/cards/user-followers";
import { TextPostLikes } from "@/components/cards/text-post-likes";
import { WarningMessage } from "@/components/cards/warning-message";
import { SuccessMessage } from "@/components/cards/success-message";
import { CharacterSwipe } from "@/components/cards/character-swipe";
import { Github } from "@/components/cards/github-card/github-card";
import { DatePicker } from "@/components/cards/date-picker/date-picker";
import { PriceMostPopular } from "@/components/cards/price-most-popular";
import { AvatarsHorizontal } from "@/components/cards/avatars-horizontal";
import { TeamMembers } from "@/components/cards/team-members/team-members";
import { UserFollowMessage } from "@/components/cards/user-connect-message";
import { InformationMessage } from "@/components/cards/information-message";
import { HorizontalSalesCard } from "@/components/cards/horizontal-sales-card";
import { Notifications } from "@/components/cards/notifications/notifications";
import { CharacterSwipeDotted } from "@/components/cards/character-swipe-dotted";
import { CreateAccount } from "@/components/cards/create-account/create-account";
import { ShareDocument } from "@/components/cards/share-document/share-document";
import { PaymentMethod } from "@/components/cards/payment-method/payment-method";
import { ReportAnIssue } from "@/components/cards/report-an-issue/report-an-issue";
import { SubscribeToNewsletter } from "@/components/cards/subscribe-to-newsletter";
import { CookieSettings } from "@/components/cards/cookie-settings/cookie-settings";

import { CardsDataTypes } from "../types";
import RecentSales from "@/components/cards/recent-sales";
import StatisticGraph from "@/components/cards/statistic-graph";
import { DetailedStatistic } from "@/components/cards/detailed-statistics";
import CardSquareIcon from "@/components/cards/card-square-icon";
import ReadMoreInspiration from "@/components/cards/read-more-inspiration";
import MapDisplay from "@/components/cards/map-display";
import Ranks from "@/components/cards/ranks";
import { ActivitiesViewAll } from "@/components/cards/activities-view-all";

export const cardsData: CardsDataTypes[] = [
  { component: <ActivitiesViewAll />, path: "activities-view-all" },
  { component: <Ranks />, path: "ranks" },
  { component: <MapDisplay />, path: "map-display" },
  { component: <ReadMoreInspiration />, path: "read-more-inspiration" },
  { component: <CardSquareIcon />, path: "card-square-icon" },
  { component: <DetailedStatistic />, path: "detailed-statistics" },
  { component: <StatisticGraph />, path: "statistic-graph" },
  { component: <RecentSales />, path: "recent-sales" },
  { component: <BarDisplay />, path: "bar-display" },
  { component: <News />, path: "news" },
  { component: <Next />, path: "next" },
  { component: <Price />, path: "price" },
  { component: <Shoe />, path: "shoe-card" },
  { component: <Revenue />, path: "revenue" },
  { component: <Netflix />, path: "netflix" },
  { component: <Previous />, path: "previous" },
  { component: <Github />, path: "github-card" },
  { component: <PricePro />, path: "price-pro" },
  { component: <Character />, path: "character" },
  { component: <TextBrief />, path: "text-brief" },
  { component: <UserIntro />, path: "user-intro" },
  { component: <AboutUser />, path: "about-user" },
  { component: <ShareFile />, path: "share-file" },
  { component: <Activities />, path: "activities" },
  { component: <AvatarMore />, path: "avatar-more" },
  { component: <SocialMenu />, path: "social-menu" },
  { component: <DatePicker />, path: "date-picker" },
  { component: <RangeFilter />, path: "range-filter" },
  { component: <TeamMembers />, path: "team-members" },
  { component: <ErrorMessage />, path: "error-message" },
  { component: <UserProgress />, path: "user-progress" },
  { component: <FeedbackRate />, path: "feedback-rate" },
  { component: <SocialCounts />, path: "social-counts" },
  { component: <Notifications />, path: "notifications" },
  { component: <CreateAccount />, path: "create-account" },
  { component: <ShareDocument />, path: "share-document" },
  { component: <PaymentMethod />, path: "payment-method" },
  { component: <RevenueAmount />, path: "revenue-amount" },
  { component: <ReportAnIssue />, path: "report-an-issue" },
  { component: <UserFollowers />, path: "user-followers" },
  { component: <TextPostLikes />, path: "text-post-likes" },
  { component: <TinyLineChart />, path: "tiny-line-chart" },
  { component: <WarningMessage />, path: "warning-message" },
  { component: <SuccessMessage />, path: "success-message" },
  { component: <CharacterSwipe />, path: "character-swipe" },
  { component: <CookieSettings />, path: "cookie-settings" },
  { component: <PriceMostPopular />, path: "price-most-popular" },
  { component: <AvatarsHorizontal />, path: "avatars-horizontal" },
  { component: <UserFollowMessage />, path: "user-follow-message" },
  { component: <InformationMessage />, path: "information-message" },
  { component: <HorizontalSalesCard />, path: "horizontal-sales-card" },
  { component: <CharacterSwipeDotted />, path: "character-swipe-dotted" },
  { component: <SubscribeToNewsletter />, path: "subscribe-to-newsletter" },
];

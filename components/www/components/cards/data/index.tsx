/* eslint-disable react/jsx-key */
import { News } from "@/components/cards/news";
import { Next } from "@/components/cards/next";
import { Price } from "@/components/cards/price";
import { Shoe } from "@/components/cards/shoe-card";
import { Revenue } from "@/components/cards/revenue";
import { Netflix } from "@/components/cards/netflix";
import { PricePro } from "@/components/cards/price-pro";
import { Previous } from "@/components/cards/previous";
import { Character } from "@/components/cards/character";
import { TextBrief } from "@/components/cards/text-brief";
import { UserIntro } from "@/components/cards/user-intro";
import { AboutUser } from "@/components/cards/about-user";
import { ShareFile } from "@/components/cards/share-file";
import { Activities } from "@/components/cards/activities";
import { AvatarMore } from "@/components/cards/avatar-more";
import { SocialMenu } from "@/components/cards/social-menu";
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
import { DemoGithub } from "@/components/cards/github-card/github-card";
import { PriceMostPopular } from "@/components/cards/price-most-popular";
import { AvatarsHorizontal } from "@/components/cards/avatars-horizontal";
import { UserFollowConnect } from "@/components/cards/user-connect-message";
import { InformationMessage } from "@/components/cards/information-message";
import { DemoDatePicker } from "@/components/cards/date-picker/date-picker";
import { DemoTeamMembers } from "@/components/cards/team-members/team-members";
import { HorizontalSalesCard } from "@/components/cards/horizontal-sales-card";
import { CharacterSwipeDotted } from "@/components/cards/character-swipe-dotted";
import { DemoNotifications } from "@/components/cards/notifications/notifications";
import { SubscribeToNewsletter } from "@/components/cards/subscribe-to-newsletter";
import { CookieSettings } from "@/components/cards/cookie-settings/cookie-settings";
import { DemoCreateAccount } from "@/components/cards/create-account/create-account";
import { DemoShareDocument } from "@/components/cards/share-document/share-document";
import { DemoPaymentMethod } from "@/components/cards/payment-method/payment-method";
import { DemoReportAnIssue } from "@/components/cards/report-an-issue/report-an-issue";

import { CardsDataTypes } from "../types";

export const cardsData: CardsDataTypes[] = [
  <News />,
  <News />,
  <Next />,
  <Price />,
  <Shoe />,
  <Revenue />,
  <Netflix />,
  <PricePro />,
  <Previous />,
  <Character />,
  <TextBrief />,
  <UserIntro />,
  <AboutUser />,
  <ShareFile />,
  <Activities />,
  <AvatarMore />,
  <SocialMenu />,
  <DemoGithub />,
  <RangeFilter />,
  <ErrorMessage />,
  <UserProgress />,
  <FeedbackRate />,
  <TinyLineChart />,
  <SocialCounts />,
  <UserFollowers />,
  <TextPostLikes />,
  <WarningMessage />,
  <SuccessMessage />,
  <CharacterSwipe />,
  <DemoDatePicker />,
  <CookieSettings />,
  <DemoTeamMembers />,
  <PriceMostPopular />,
  <AvatarsHorizontal />,
  <UserFollowConnect />,
  <DemoNotifications />,
  <DemoCreateAccount />,
  <DemoShareDocument />,
  <DemoPaymentMethod />,
  <DemoReportAnIssue />,
  <InformationMessage />,
  <HorizontalSalesCard />,
  <CharacterSwipeDotted />,
  <SubscribeToNewsletter />,
];

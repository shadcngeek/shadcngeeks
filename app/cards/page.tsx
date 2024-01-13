// import Download from "@/components/download/download";
// import { CookieSettings } from "@/components/cards/cookie-settings/cookie-settings";

// import handleGetFolderPath from "@/actions/handleGetFolderPath";

// export default function Cards() {
//   return (
//     <div className="p-10">
//       <Download folderPath={handleGetFolderPath("cards/cookie-settings")}>
//         <CookieSettings />
//       </Download>
//     </div>
//   );
// }

import { Metadata } from "next";
import Image from "next/image";

import { cn } from "@/lib/utils";

import Download from "@/components/download/download";
import handleGetFolderPath from "@/actions/handleGetFolderPath";

import { CookieSettings } from "@/components/cards/cookie-settings/cookie-settings";
import { DemoCreateAccount } from "@/components/cards/create-account/create-account";
import { DemoDatePicker } from "@/components/cards/date-picker/date-picker";
import { DemoGithub } from "@/components/cards/github-card/github-card";
import { DemoNotifications } from "@/components/cards/notifications/notifications";
import { DemoPaymentMethod } from "@/components/cards/payment-method/payment-method";
import { DemoReportAnIssue } from "@/components/cards/report-an-issue/report-an-issue";
import { DemoShareDocument } from "@/components/cards/share-document/share-document";
import { DemoTeamMembers } from "@/components/cards/team-members/team-members";

export const metadata: Metadata = {
  title: "Cards",
  description: "Examples of cards built using the components.",
};

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
}

export default function CardsPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/cards-light.png"
          width={1280}
          height={1214}
          alt="Cards"
          className="block dark:hidden"
        />
        <Image
          src="/examples/cards-dark.png"
          width={1280}
          height={1214}
          alt="Cards"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <Download folderPath={handleGetFolderPath("cards/create-account")}>
              <DemoCreateAccount />
            </Download>
          </DemoContainer>
          <DemoContainer>
            <Download folderPath={handleGetFolderPath("cards/payment-method")}>
              <DemoPaymentMethod />
            </Download>
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <Download folderPath={handleGetFolderPath("cards/team-members")}>
              <DemoTeamMembers />
            </Download>
          </DemoContainer>
          <DemoContainer>
            <Download folderPath={handleGetFolderPath("cards/share-document")}>
              <DemoShareDocument />
            </Download>
          </DemoContainer>
          <DemoContainer>
            <Download folderPath={handleGetFolderPath("cards/date-picker")}>
              <DemoDatePicker />
            </Download>
          </DemoContainer>
          <DemoContainer>
            <Download folderPath={handleGetFolderPath("cards/notifications")}>
              <DemoNotifications />
            </Download>
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <DemoContainer>
            <Download folderPath={handleGetFolderPath("cards/report-an-issue")}>
              <DemoReportAnIssue />
            </Download>
          </DemoContainer>
          <DemoContainer>
            <Download folderPath={handleGetFolderPath("cards/github-card")}>
              <DemoGithub />
            </Download>
          </DemoContainer>
          <DemoContainer>
            <Download folderPath={handleGetFolderPath("cards/cookie-settings")}>
              <CookieSettings />
            </Download>
          </DemoContainer>
        </div>
      </div>
    </>
  );
}

interface SubPagesTypes {
  path: string;
  imageSrc: string;
}
export type PathTypes =
  | "cards"
  | "mails"
  | "forms"
  | "music"
  | "tables"
  | "headers"
  | "playgrounds"
  | "coming-soon"
  | "landing-page"
  | "ui-component"
  | "authentication";

type PagesTypes = {
  [key in PathTypes]: {
    subPath: SubPagesTypes[];
    imageSrc: string;
  };
};

export const pages: PagesTypes = {
  authentication: {
    imageSrc: "/images/www/svg/authentication.svg",
    subPath: [
      { path: "framework", imageSrc: "" },
      { path: "code-right", imageSrc: "" },
      { path: "body-builder", imageSrc: "" },
      { path: "content-centric", imageSrc: "" },
      { path: "ai-image-generator", imageSrc: "" },
      { path: "dashboard-landing", imageSrc: "" },
    ],
  },
  cards: {
    imageSrc: "/images/www/svg/cards.svg",
    subPath: [
      { path: "framework", imageSrc: "" },
      { path: "code-right", imageSrc: "" },
      { path: "body-builder", imageSrc: "" },
      { path: "content-centric", imageSrc: "" },
      { path: "ai-image-generator", imageSrc: "" },
      { path: "dashboard-landing", imageSrc: "" },
    ],
  },
  "coming-soon": {
    imageSrc: "/images/www/svg/comingSoon.svg",
    subPath: [
      { path: "framework", imageSrc: "" },
      { path: "code-right", imageSrc: "" },
      { path: "body-builder", imageSrc: "" },
      { path: "content-centric", imageSrc: "" },
      { path: "ai-image-generator", imageSrc: "" },
      { path: "dashboard-landing", imageSrc: "" },
    ],
  },
  forms: {
    imageSrc: "/images/www/svg/authentication.svg",
    subPath: [
      { path: "framework", imageSrc: "" },
      { path: "code-right", imageSrc: "" },
      { path: "body-builder", imageSrc: "" },
      { path: "content-centric", imageSrc: "" },
      { path: "ai-image-generator", imageSrc: "" },
      { path: "dashboard-landing", imageSrc: "" },
    ],
  },
  headers: {
    imageSrc: "/images/www/svg/headers.svg",
    subPath: [
      { path: "framework", imageSrc: "" },
      { path: "code-right", imageSrc: "" },
      { path: "body-builder", imageSrc: "" },
      { path: "content-centric", imageSrc: "" },
      { path: "ai-image-generator", imageSrc: "" },
      { path: "dashboard-landing", imageSrc: "" },
    ],
  },
  "landing-page": {
    imageSrc: "/images/www/svg/landingPage.svg",
    subPath: [
      { path: "framework", imageSrc: "/images/www/framework-light.png" },
      { path: "code-right", imageSrc: "/images/www/code-right-light.png" },
      { path: "body-builder", imageSrc: "/images/www/body-builder.png" },
      {
        path: "content-centric",
        imageSrc: "/images/www/content-centric-light.png",
      },
      {
        path: "ai-image-generator",
        imageSrc: "/images/www/ai-image-generator-light.png",
      },
      {
        path: "dashboard-landing",
        imageSrc: "/images/www/ui-dashboard-light.png",
      },
    ],
  },
  mails: {
    imageSrc: "/images/www/svg/mails.svg",
    subPath: [
      { path: "framework", imageSrc: "" },
      { path: "code-right", imageSrc: "" },
      { path: "body-builder", imageSrc: "" },
      { path: "content-centric", imageSrc: "" },
      { path: "ai-image-generator", imageSrc: "" },
      { path: "dashboard-landing", imageSrc: "" },
    ],
  },
  music: {
    imageSrc: "/images/www/svg/music.svg",
    subPath: [
      { path: "framework", imageSrc: "" },
      { path: "code-right", imageSrc: "" },
      { path: "body-builder", imageSrc: "" },
      { path: "content-centric", imageSrc: "" },
      { path: "ai-image-generator", imageSrc: "" },
      { path: "dashboard-landing", imageSrc: "" },
    ],
  },
  playgrounds: {
    imageSrc: "/images/www/svg/playground.svg",
    subPath: [
      { path: "framework", imageSrc: "" },
      { path: "code-right", imageSrc: "" },
      { path: "body-builder", imageSrc: "" },
      { path: "content-centric", imageSrc: "" },
      { path: "ai-image-generator", imageSrc: "" },
      { path: "dashboard-landing", imageSrc: "" },
    ],
  },
  tables: {
    imageSrc: "/images/www/svg/tables.svg",
    subPath: [
      { path: "framework", imageSrc: "" },
      { path: "code-right", imageSrc: "" },
      { path: "body-builder", imageSrc: "" },
      { path: "content-centric", imageSrc: "" },
      { path: "ai-image-generator", imageSrc: "" },
      { path: "dashboard-landing", imageSrc: "" },
    ],
  },
  "ui-component": {
    imageSrc: "/images/www/svg/dashboard.svg",
    subPath: [
      { path: "framework", imageSrc: "" },
      { path: "code-right", imageSrc: "" },
      { path: "body-builder", imageSrc: "" },
      { path: "content-centric", imageSrc: "" },
      { path: "ai-image-generator", imageSrc: "" },
      { path: "dashboard-landing", imageSrc: "" },
    ],
  },
};

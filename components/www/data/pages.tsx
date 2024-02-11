interface SubPagesTypes {
  path: string;
  imageSrc: string;
}
export type PathTypes =
  | "cards"
  | "forms"
  | "music"
  | "table"
  | "headers"
  | "messaging"
  | "dashboard"
  | "playground"
  | "coming-soon"
  | "landing-page"
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
      { path: "acme", imageSrc: "/images/www/create-account.png" },
      { path: "login", imageSrc: "/images/www/create-account.png" },
      { path: "create-account", imageSrc: "/images/www/create-account.png" },
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
    subPath: [{ path: "bordy", imageSrc: "/images/www/bordy.png" }],
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
      { path: "body-builder", imageSrc: "/images/www/body-builder.png" },
      { path: "code-right", imageSrc: "/images/www/code-right-light.png" },
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
  messaging: {
    imageSrc: "/images/www/svg/mails.svg",
    subPath: [{ path: "mail", imageSrc: "/images/www/mail.png" }],
  },
  music: {
    imageSrc: "/images/www/svg/music.svg",
    subPath: [{ path: "shad-music", imageSrc: "/images/www/shad-music.png" }],
  },
  playground: {
    imageSrc: "/images/www/svg/playground.svg",
    subPath: [
      { path: "shad-playground", imageSrc: "/images/www/shad-playground.png" },
    ],
  },
  table: {
    imageSrc: "/images/www/svg/tables.svg",
    subPath: [
      { path: "todo", imageSrc: "/images/www/shad-todo.png" },
      { path: "deployment", imageSrc: "/images/www/deployment.png" },
    ],
  },
  dashboard: {
    imageSrc: "/images/www/svg/dashboard.svg",
    subPath: [
      { path: "graphy", imageSrc: "/images/www/graphy.png" },
      { path: "analytics", imageSrc: "/images/www/analytics.png" },
      { path: "user-activity", imageSrc: "/images/www/user-activity.png" },
      { path: "shad-dashboard", imageSrc: "/images/www/shad-dashboard.png" },
    ],
  },
};
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
  | "pricing"
  | "calender"
  | "not-found"
  | "messaging"
  | "statistics"
  | "dashboard"
  | "playground"
  | "testimonial"
  | "coming-soon"
  | "team-section"
  | "landing-page"
  | "authentication";

type PagesTypes = {
  [key in PathTypes]: {
    subPath: SubPagesTypes[];
    imageSrc: string;
  };
};

export const pages: PagesTypes = {
  "team-section": {
    imageSrc: "/images/www/svg/our-team.svg",
    subPath: [{ path: "", imageSrc: "" }],
  },

  pricing: {
    imageSrc: "/images/www/svg/pricing.svg",
    subPath: [{ path: "", imageSrc: "" }],
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

  testimonial: {
    imageSrc: "/images/www/svg/testimonials.svg",
    subPath: [
      { path: "carousel", imageSrc: "/images/www/testi-carousel.png" },
      {
        path: "classic-separated",
        imageSrc: "/images/www/testi-separated.png",
      },
      { path: "classic", imageSrc: "/images/www/testi-classic.png" },
      { path: "rounded", imageSrc: "/images/www/testi-rounded.png" },
      {
        path: "classic-simple",
        imageSrc: "/images/www/testi-classic-simple.png",
      },
      { path: "classic-spaced", imageSrc: "/images/www/testi-space.png" },
      { path: "classic-star", imageSrc: "/images/www/testi-star.png" },
      { path: "classic-grid", imageSrc: "/images/www/testi-grid.png" },
      {
        path: "classic-grid-multi",
        imageSrc: "/images/www/testi-grid-multi.png",
      },
    ],
  },

  "not-found": {
    imageSrc: "/images/www/svg/404.svg",
    subPath: [
      { path: "classic", imageSrc: "/images/www/classic-404.png" },
      { path: "classic-large", imageSrc: "/images/www/classic-large.png" },
      { path: "classic-desert", imageSrc: "/images/www/classic-desert.png" },
    ],
  },
  forms: {
    imageSrc: "/images/www/svg/form.svg",
    subPath: [
      { path: "classic", imageSrc: "/images/www/classic-form.png" },
      {
        path: "personal-details",
        imageSrc: "/images/www/personal-details.png",
      },
      { path: "registration", imageSrc: "/images/www/registration.png" },
      { path: "repository", imageSrc: "/images/www/repository.png" },
      { path: "settings", imageSrc: "/images/www/settings.png" },
    ],
  },
  headers: {
    imageSrc: "/images/www/svg/headers.svg",
    subPath: [
      { path: "advance", imageSrc: "" },
      { path: "simple", imageSrc: "" },
    ],
  },
  statistics: {
    imageSrc: "/images/www/svg/statistics.svg",
    subPath: [{ path: "", imageSrc: "" }],
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
    subPath: [
      { path: "mail", imageSrc: "/images/www/mail.png" },
      { path: "chat-alpha", imageSrc: "/images/www/chat-alpha.png" },
      { path: "chat-web", imageSrc: "/images/www/chat-web.png" },
    ],
  },

  authentication: {
    imageSrc: "/images/www/svg/authentication.svg",
    subPath: [
      { path: "login", imageSrc: "/images/www/shadcn-2-account.png" },
      { path: "login-side", imageSrc: "/images/www/login-side.png" },
      { path: "login-center", imageSrc: "/images/www/login-center.png" },
      { path: "create-account", imageSrc: "/images/www/shadcn-1-account.png" },
      {
        path: "login-center-mega",
        imageSrc: "/images/www/login-center-mega.png",
      },
    ],
  },

  "coming-soon": {
    imageSrc: "/images/www/svg/comingSoon.svg",
    subPath: [
      { path: "bordy", imageSrc: "/images/www/bordy.png" },
      { path: "classic", imageSrc: "/images/www/coming-soon-classic.png" },
    ],
  },

  music: {
    imageSrc: "/images/www/svg/music.svg",
    subPath: [
      { path: "classic-mega", imageSrc: "/images/www/music-classic-mega.png" },
      { path: "classic", imageSrc: "/images/www/music-classic.png" },
      { path: "shad-music", imageSrc: "/images/www/shad-music.png" },
    ],
  },
  playground: {
    imageSrc: "/images/www/svg/playground.svg",
    subPath: [
      { path: "image-edit", imageSrc: "/images/www/image-edit.png" },
      { path: "image-edit-mega", imageSrc: "/images/www/image-edit-mega.png" },
      { path: "shad-playground", imageSrc: "/images/www/shad-playground.png" },
    ],
  },
  table: {
    imageSrc: "/images/www/svg/tables.svg",
    subPath: [
      { path: "task", imageSrc: "/images/www/shad-todo.png" },
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
  calender: {
    imageSrc: "/images/www/svg/calendar.svg",
    subPath: [
      { path: "classic", imageSrc: "/images/www/classic.png" },
      { path: "classic-task", imageSrc: "/images/www/classic-task.png" },
      { path: "multi", imageSrc: "/images/www/multi.png" },
    ],
  },
};

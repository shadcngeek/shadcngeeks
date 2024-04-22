import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const notificationsSchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  imgSrc: z.array(z.string()),
  unread: z.boolean(),
  subtitle: z.string(),
  notificationCount: z.string(),
});

export type NotificationsType = z.infer<typeof notificationsSchema>;

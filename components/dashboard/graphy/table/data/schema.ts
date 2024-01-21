import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const salesSchema = z.object({
  id: z.string(),
  price: z.string(),
  pieces: z.number(),
  productName: z.string(),
  paymentMethod: z.string(),
});

export type Task = z.infer<typeof salesSchema>;

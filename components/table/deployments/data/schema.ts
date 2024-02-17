import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

// export const taskSchema = z.object({
//   id: z.string(),
//   title: z.string(),
//   status: z.string(),
//   label: z.string(),
//   priority: z.string(),
// })

// export type Task = z.infer<typeof taskSchema>

export const productionSchema = z.object({
  id: z.string(),
  commitMessage: z.string(),
  status: z.string(),
  label: z.string(),
  date: z.string(),
  branch: z.string(),
  environment: z.string(),
});

export type Production = z.infer<typeof productionSchema>;

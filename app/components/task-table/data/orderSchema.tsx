import { z } from "zod";

export const orderShema = z.object({
  id: z.string(),
  table: z.string(),
  totalPrice: z.string(),
});

export type Order = z.infer<typeof orderShema>;

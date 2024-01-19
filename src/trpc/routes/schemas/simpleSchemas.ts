import { z } from "zod";

export const HelloInputSchema = z.object({
  name: z.string(),
});
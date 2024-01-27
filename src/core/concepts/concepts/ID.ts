import { Value } from "./Value";
import z from "zod";

export const IDSchema = z.string();

export type IDModel = z.infer<typeof IDSchema>;

export class ID extends Value<IDModel> {
  parse(model: unknown): IDModel {
    return IDSchema.parse(model);
  }

  toString(): string {
    return this.value;
  }
}

export type ModelProp = string | number | boolean | null;

export interface Model {
  [key: string]: ModelProp | ModelProp[] | Model | Model[];
}

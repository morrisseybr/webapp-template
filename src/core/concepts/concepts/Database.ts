import { EntityModel } from "./Entity";

export interface Database {
  newId(location: string): Promise<string>;
  find(location: string, id: string): Promise<EntityModel | null>;
  list(
    location: string,
    page: number,
    pageSize: number,
  ): Promise<EntityModel[]>;
  count(location: string): Promise<number>;
  save(location: string, model: EntityModel): Promise<void>;
  delete(location: string, id: string): Promise<void>;
}

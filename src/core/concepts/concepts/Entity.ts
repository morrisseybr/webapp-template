import { ID, IDModel } from "./ID";
import { Model } from "./Model";
import { Serializable } from "./Serializable";

export interface EntityModel extends Model {
  id: IDModel;
}

export abstract class Entity<T extends EntityModel> implements Serializable<T> {
  readonly #id: ID;

  get id(): ID {
    return this.#id;
  }

  protected constructor(id: ID) {
    this.#id = id;
  }

  abstract toModel(): T;
}

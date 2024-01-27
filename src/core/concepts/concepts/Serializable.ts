import { EntityModel } from "./Entity";
import { Model, ModelProp } from "./Model";

export interface Serializable<M extends Model | ModelProp> {
  toModel(): M;
}

export interface SerializableConstructor<
  M extends EntityModel,
  S extends Serializable<M>,
> {
  fromModel(model: M): S;
}

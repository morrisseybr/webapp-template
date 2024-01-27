import { Model, ModelProp } from "./Model";
import { Serializable } from "./Serializable";

export abstract class Value<T extends Model | ModelProp>
  implements Serializable<T>
{
  protected readonly value: T;

  constructor(model: T) {
    this.value = this.parse(model);
  }

  equals(other?: Value<T>): boolean {
    if (other === null || other === undefined) {
      return false;
    }
    if (other.value === undefined) {
      return false;
    }
    return JSON.stringify(this.value) === JSON.stringify(other.value);
  }

  toModel(): T {
    return this.value;
  }

  abstract parse(model: unknown): T;

  abstract toString(): string;
}

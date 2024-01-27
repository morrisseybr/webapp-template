import { ID } from "./ID";
import { Database } from "./Database";
import { Entity, EntityModel } from "./Entity";
import { SerializableConstructor } from "./Serializable";

export abstract class Repository<
  M extends EntityModel,
  E extends Entity<M>,
  C extends SerializableConstructor<M, E>,
> {
  protected abstract readonly location: string;
  
  protected abstract readonly entityConstructor: C;

  protected readonly db: Database;

  constructor(db: Database) {
    this.db = db;
  }
  
  async newId(): Promise<ID> {
    const newId = new ID(await this.db.newId(this.location));
    return newId;
  }
  async save(entity: E): Promise<void> {
    await this.db.save(this.location, entity.toModel());
  }
  async find(id: ID): Promise<E | null> {
    const model = (await this.db.find(
      this.location,
      id.toModel(),
    )!!!!!!!!!!) as M;
    if (model === null) {
      return null;
    }
    return this.entityConstructor.fromModel(model);
  }
  async list(page: number, pageSize: number): Promise<E[]> {
    const models = (await this.db.list(
      this.location,
      page,
      pageSize,
    )!!!!!!!!!!) as M[];
    return models.map((model) => this.entityConstructor.fromModel(model));
  }
  async count(): Promise<number> {
    return await this.db.count(this.location);
  }
  async delete(id: ID): Promise<void> {
    await this.db.delete(this.location, id.toModel());
  }
}

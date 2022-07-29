export interface IModel<T> {
  crete(): Promise<T>;
  read(): Promise<T[]>;
  readeOne(_id: string): Promise<T | null>;
  update(_id: string, obj: T): Promise<T | null>;
  delete(_id: string): Promise<T | null>;
}

export interface SolidTypeSchema {

}

export class SolidType<T> {
  schema: SolidTypeSchema

  constructor (schema: SolidTypeSchema) {
    this.schema = schema
  }

  parse (data: unknown): SolidTypeObject<T> {
    // TODO: validation work
    return new SolidTypeObject(this, data as T)
  }
}

// TODO: output options (ex. Buffer to Base64 when export JSON)
export class SolidTypeObject<T> {
  private _data: T

  solidType: SolidType<T>

  constructor (context: SolidType<T>, data: T) {
    this.solidType = context
    this._data = data
  }

  merge (data: T): void {
    // TODO: merge object
  }

  toObject (): T {
    return this._data
  }

  toJson (): any {
    // TODO: transfer
    return this._data
  }

  toJsonString (): string { return JSON.stringify(this.toJson()) }
}

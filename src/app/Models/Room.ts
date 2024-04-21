import { Table } from "./Table";

export interface Room {
  id: number,
  name: string,
  tables?: Table[]
}
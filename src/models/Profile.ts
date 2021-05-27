import { Model } from "objection";

export class Profile extends Model {
  public id!: string;
  public firstName?: string;
  public lastName?: string;

  static get tableName() {
    return "profile";
  }
}

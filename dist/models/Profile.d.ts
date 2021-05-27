import { Model } from "objection";
export declare class Profile extends Model {
    id: string;
    firstName?: string;
    lastName?: string;
    static get tableName(): string;
}

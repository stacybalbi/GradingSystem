import { BaseModels } from "./base.models";

export interface List extends BaseModels{
    name : string,
    dayListId : number,
    Created : Date
}
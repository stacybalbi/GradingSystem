import { BaseModels } from "../base.models";


export interface ListDto extends BaseModels{
    name : string,
    dayListId : number,
    Created : Date
}
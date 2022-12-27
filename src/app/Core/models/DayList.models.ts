import { Assistance } from "../enums/Assistance.enum";
import { BaseModels } from "./base.models";

export interface DayList extends BaseModels{
    StudentsId : number,
    assistance : Assistance

}
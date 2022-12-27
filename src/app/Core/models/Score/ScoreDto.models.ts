import { Literals } from "../../enums/Literals.enum";
import { BaseModels } from "../base.models";
import { Students } from "../Students.models";
import { StudentsDto } from "../Students/StudentsDto.models";
import { Subject } from "../Subject.models";
import { SubjectDto } from "../Subject/SubjectDto.models";

export interface ScoreDto extends BaseModels{
    StudentsId : StudentsDto,
    SubjectId : SubjectDto,
    rating : number,
    literals : Literals
}
import { Literals } from '../enums/Literals.enum';
import { BaseModels } from './base.models';
import { Students } from './Students.models';
import { Subject } from './Subject.models';

export interface Score extends BaseModels {
  StudentsId: Students;
  SubjectId: Subject;
  rating: number;
  literals: Literals;
}

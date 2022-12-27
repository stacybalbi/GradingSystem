import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from 'src/app/Core/models/Students.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService extends BaseService<Students> {
  
  constructor(protected override http: HttpClient) {
    super(http, `Students`);
  }

}

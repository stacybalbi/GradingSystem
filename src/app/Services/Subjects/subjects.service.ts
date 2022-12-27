import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'src/app/Core/models/Subject.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService extends BaseService<Subject> {
 
  constructor(protected override http: HttpClient) {
    super(http, `Subject`);
  }
 
}

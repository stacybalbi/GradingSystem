import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DayList } from 'src/app/Core/models/DayList.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class DaylistService extends BaseService<DayList> {

  constructor(protected override http: HttpClient) {
    super(http, `DayList`);
  }
}

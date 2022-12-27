import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from 'src/app/Core/models/List.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ListService extends BaseService<List> {

  constructor(protected override http: HttpClient) {
    super(http, `List`);
  }
}

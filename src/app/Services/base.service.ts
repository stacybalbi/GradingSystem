import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseModels } from '../Core/models/base.models';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

export class BaseService<T extends BaseModels> {
  constructor(
    protected http: HttpClient,
    @Inject('controller') private controller: string
  ) {}

  list() {
    return this.http
      .get<T[]>(`${environment.API}${this.controller}`)
      .pipe(tap(console.log));
  }

  loadById(id: any) {
    return this.http.get<T>(`${environment.API}${this.controller}/${id}`);
  }

  create(record: Partial<T>) {
    return this.http.post(`${environment.API}${this.controller}`, record);
  }

  update(record: Partial<T>) {
    return this.http.put(`${environment.API}${this.controller}`, record);
  }

  remove(id: number) {
    return this.http.delete(`${environment.API}${this.controller}/${id}`);
  }
}

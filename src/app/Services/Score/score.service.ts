import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Score } from 'src/app/Core/models/Score.models';
import { ScoreDto } from 'src/app/Core/models/Score/ScoreDto.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService extends BaseService<Score> {
  

  constructor(protected override http: HttpClient) {
    super(http, `Score`);
  }

  
}

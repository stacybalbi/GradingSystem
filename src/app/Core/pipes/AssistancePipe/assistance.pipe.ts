import { Pipe, PipeTransform } from '@angular/core';
import { Assistance } from '../../enums/Assistance.enum';

@Pipe({
  name: 'assistance'
})
export class AssistancePipe implements PipeTransform {

  transform(value: Assistance){
    return Assistance[value];
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Literals } from '../../enums/Literals.enum';

@Pipe({
  name: 'literals'
})
export class LiteralsPipe implements PipeTransform {

  transform(value : Literals){
    return Literals[value];
  }

}

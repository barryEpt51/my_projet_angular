import { Pipe, PipeTransform } from '@angular/core';
import { Level } from './models/level.model';
import { map } from 'rxjs';

const  LEVELS: Record <Level, string> = {
  J: 'Junior',
  M: 'Mid',
  S: 'Senior',
}

@Pipe({
  name: 'level',
  standalone: true
})
export class LevelPipe implements PipeTransform {

  transform(value: Level,): string {
    return LEVELS[value] || value;
  }
 
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reverse'})
export class PipesPipe implements PipeTransform {

    transform(value: string){
    return value.split('').reverse().join('');
  }

  }



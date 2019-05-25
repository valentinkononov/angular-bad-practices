import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'label'
})
export class LabelPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    console.log(`Item ${value} label call`);
    return `Item ${value}`;
  }
}

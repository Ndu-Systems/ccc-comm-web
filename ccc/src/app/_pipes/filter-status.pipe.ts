import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../_models/test.model';

@Pipe({
  name: 'filterstatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(tests: Test[], key: string): any {
    if (!tests) {
      return []
    }
    if (!key) {
      return tests;
    }
    return tests.filter(x => (x.Outcome || '').toLocaleUpperCase().includes(key.toLocaleUpperCase()));
  }

}

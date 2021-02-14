import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonDate',
})
export class JsonDatePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (!value) {
      return '';
    }
    const date = new Date(value);
    if (!date) {
      return '';
    }
    return formatDate(date, 'dd/MM/yyyy hh:mm a', 'en-AU');
  }
}

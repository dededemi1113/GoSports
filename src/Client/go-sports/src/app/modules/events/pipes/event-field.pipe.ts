import { Pipe, PipeTransform } from '@angular/core';
import { EventFieldService } from '../services/event-field.service';

@Pipe({
  name: 'fieldValue',
})
export class FieldValuePipe implements PipeTransform {
  constructor(private eventFieldSvc: EventFieldService) {}
  transform(value: string, field: any, fieldConfig: any): string {
    if (!value) {
      return '';
    }
    return this.eventFieldSvc.getDescription(field, fieldConfig);
  }
}

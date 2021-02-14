import { Pipe, PipeTransform } from '@angular/core';
import { EventFieldService } from '../services/event-field.service';

@Pipe({
  name: 'fieldValue',
})
export class FieldValuePipe implements PipeTransform {
  constructor(private eventFieldSvc: EventFieldService) {}
  transform(field: any, fieldConfig: any): string {
    if (!field.value) {
      return '';
    }
    return this.eventFieldSvc.getDescription(field, fieldConfig);
  }
}

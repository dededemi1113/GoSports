import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-event-list',
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

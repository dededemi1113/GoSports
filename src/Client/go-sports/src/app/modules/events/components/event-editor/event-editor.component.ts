import { NavigateService } from './../../../../core/services/navigate.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gs-event-editor',
  templateUrl: 'event-editor.component.html',
  styleUrls: ['event-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventEditorComponent implements OnInit {
  constructor(private navSvc: NavigateService, private router: Router) {
    var state = this.navSvc.getStateData();
    if (state && state.event) {
    } else {
      this.router.navigate(['/events']);
    }
  }

  ngOnInit() {}
}

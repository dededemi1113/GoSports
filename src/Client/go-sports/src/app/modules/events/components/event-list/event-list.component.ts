import { TemplatesService } from './../../../../core/services/templates.service';
import { GamesService } from './../../../../core/services/games.service';
import { Constants } from './../../../../core/config/constants';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gs-event-list',
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent implements OnInit {
  template: any;
  game: any;
  loaded = false;
  selectedEvent: any;
  constructor(
    private gameSvc: GamesService,
    private templateSvc: TemplatesService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this._updateGame();
  }

  ngOnInit() {}

  onGameChosen(game: any) {
    this._updateGame();
  }
  onEventClick(evt: any) {
    this.selectedEvent = evt;
    this.router.navigate(['/events/edit'], {
      state: { data: { event: evt, callback: '/home' } },
    });
  }

  private _updateGame() {
    this.game = this.gameSvc.getSelectedGame();
    // choose a game first
    if (!this.game) {
      this.router.navigate(['/games'], {
        state: { data: { callback: '/events' } },
      });
      return;
    }
    // find the related event template
    this.templateSvc.getTemplates().subscribe((templates) => {
      this.template = templates.find(
        (tmp: any) => tmp.gameType === this.game.type
      );
      this.loaded = true;
      this.cdr.markForCheck();
    });
  }
}

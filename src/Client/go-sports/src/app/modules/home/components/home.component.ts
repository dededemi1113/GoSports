import { EventsService } from './../../../core/services/events.service';
import { TemplatesService } from './../../../core/services/templates.service';
import { GamesService } from './../../../core/services/games.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gs-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  game: any = null;
  template: any = null;
  events = [];
  eventLoaded = false;
  templateLoaded = false;
  constructor(
    private gameSvc: GamesService,
    private templateSvc: TemplatesService,
    private eventSvc: EventsService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.game = this.gameSvc.getSelectedGame();
    if (!this.game) {
      this.router.navigate(['/games']);
      return;
    }
    this.templateSvc.getTemplates().subscribe((res) => {
      this.template = res.find((tmp: any) => tmp.gameType === this.game.type);
      this.templateLoaded = true;
      this.cdr.markForCheck();
      console.log(this.template);
    });
    this.eventSvc
      .getEvents({ gameId: this.game.id, startIndex: 0, fetchSize: 50 })
      .subscribe((res) => {
        this.events = res.items;
        this.eventLoaded = true;
        this.cdr.markForCheck();
        console.log(res.items);
      });
  }

  ngOnInit() {}

  onGameChosen(game: any) {
    this.game = game;
  }
  getFieldType(eventType: string, fieldConfigId: number): any {
    const eventConfig = this.template.events.find(
      (evt: any) => evt.eventType === eventType
    );
    if (!eventConfig) {
      return null;
    }
    return eventConfig.fieldConfigs.find(
      (cfg: any) => cfg.id === fieldConfigId
    );
  }
  onEventClicked(event: any) {
    const eventConfig = this.template.events.find(
      (evt: any) => evt.eventType === event.type
    );
    this.router.navigate(['/events/edit'], {
      state: {
        data: {
          eventConfig: eventConfig,
          game: this.game,
          event: event,
          callback: '/home',
        },
      },
    });
  }
}

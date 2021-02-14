import { EventsService } from './../../../core/services/events.service';
import { TemplatesService } from './../../../core/services/templates.service';
import { GamesService } from './../../../core/services/games.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  game: any = null;
  constructor(
    private gameSvc: GamesService,
    private templateSvc: TemplatesService,
    private eventSvc: EventsService
  ) {
    this.game = this.gameSvc.getSelectedGame();
    this.templateSvc.getTemplates().subscribe((res) => {
      console.log(res);
    });
    this.eventSvc
      .getEvents({ gameId: 1, startIndex: 0, fetchSize: 50 })
      .subscribe((res) => {
        console.log(res);
      });
  }

  ngOnInit() {}

  onGameChosen(game: any) {
    this.game = game;
  }
}

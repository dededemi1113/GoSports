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
  constructor(private gameSvc: GamesService) {
    this.game = this.gameSvc.getSelectedGame();
  }

  ngOnInit() {}

  onGameChosen(game: any) {
    this.game = game;
  }
}

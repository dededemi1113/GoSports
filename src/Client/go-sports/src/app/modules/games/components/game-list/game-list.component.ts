import { shareReplay } from 'rxjs/operators';
import { GamesService } from './../../../../core/services/games.service';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'gs-game-list',
  templateUrl: 'game-list.component.html',
  styleUrls: ['game-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameListComponent implements OnInit {
  games$: Observable<any>;
  games: any[] = [];
  chosenId = -1;
  @Output()
  gameChosen: EventEmitter<any> = new EventEmitter<any>();
  constructor(private gamesSvc: GamesService, private router: Router) {
    this.games$ = this.gamesSvc.getGames().pipe(shareReplay(1));
  }

  ngOnInit() {}
  onClick(game: any) {
    this.chosenId = game.id;
    this.gamesSvc.setGame(game);
    this.router.navigate(['/home']);
    this.gameChosen.emit(game);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'gs-game-card',
  templateUrl: 'game-card.component.html',
  styleUrls: ['game-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCardComponent implements OnInit {
  @Input()
  game: any = null;
  @Input()
  chosenId = 0;
  @Output()
  clicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
  onClick(game: any) {
    this.clicked.emit(game);
  }
}

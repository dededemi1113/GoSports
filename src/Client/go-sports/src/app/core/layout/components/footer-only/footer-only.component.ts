import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-footer-only',
  templateUrl: 'footer-only.component.html',
  styleUrls: ['footer-only.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterOnlyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

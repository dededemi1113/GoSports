import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-header-footer',
  templateUrl: 'header-footer.component.html',
  styleUrls: ['header-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderFooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

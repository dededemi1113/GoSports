import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(private router: Router) {}
  public getStateData(): any {
    var nav = this.router.getCurrentNavigation();
    if (nav != null && nav.extras && nav.extras.state) {
      return nav.extras.state.data;
    }
    return null;
  }
}

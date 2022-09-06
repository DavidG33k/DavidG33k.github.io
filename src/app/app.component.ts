import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Okk';

  constructor(private router: Router) {
    this.router.events.subscribe(routerEvent => {
        if (routerEvent instanceof NavigationStart) {
            if (routerEvent.url != "/theme/view") {
                this.router.navigate(["theme/view"], {skipLocationChange: true})
            }
        }
    });
}
}

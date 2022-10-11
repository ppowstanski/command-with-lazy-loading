import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'strategy-with-lazy-loading';

  deleteUser(user: string) {
    console.log(`Deleting user ${user}`);
  }

  deactivateUser(user: string) {
    console.log(`Deactivate user ${user}`);
  }
}

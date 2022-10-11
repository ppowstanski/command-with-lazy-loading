import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor() {
    }

    title = 'strategy-with-lazy-loading';

    actions = ['Delete', 'Deactivate'];
    users = ['User One', 'User Two'];

    performAction(userAction: string, user: string) {
        if (userAction === 'Delete') {
            this.deleteUser(user);
            return;
        }

        if (userAction === 'Deactivate') {
            this.deactivateUser(user);
            return;
        }

        console.log(`Unknown action '${userAction}'.`);
    }

    private deleteUser(user: string): void {
        console.log(`Delete user:' ${user}'`);
    }

    private deactivateUser(user: string): void {
        console.log(`Deactivate user:' ${user}'`);
    }
}

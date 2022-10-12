import {Component} from '@angular/core';
import {UserActionInvoker} from '@app/users-actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private invoker: UserActionInvoker) {
    }

    title = 'strategy-with-lazy-loading';

    actions = ['Delete', 'Deactivate'];
    users = ['User One', 'User Two'];

    performAction(userAction: string, user: string) {
        this.invoker.execute(userAction, user, () => {
            console.log('action done!!!!!');
        });
    }
}

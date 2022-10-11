import {Component} from '@angular/core';
import {UserActionInvoker} from '@app/user-actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'strategy-with-lazy-loading';

    actions = ['Delete', 'Deactivate'];
    users = ['User One', 'User Two'];

    performAction(userAction: string, user: string) {
        UserActionInvoker.execute(userAction, user, () => {
            console.log('Action done!!!!!');
        });
    }
}

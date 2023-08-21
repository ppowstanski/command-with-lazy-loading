import {Component} from '@angular/core';
import {UserActionInvoker, UserActionType} from './features/users-actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private invoker: UserActionInvoker) {
    }

    performAction(userAction: UserActionType, user: string) {
        this.invoker.execute(userAction, user, () => {
            console.log('action done!!!!!');
        });
    }

    actions: UserActionType[] = ['Delete', 'Deactivate'];
    users = ['User One', 'User Two'];
}

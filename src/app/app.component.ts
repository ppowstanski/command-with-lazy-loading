import {Component} from '@angular/core';
import {UserActionType, UserActionInvoker} from '@app/users-actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private invoker: UserActionInvoker) {
    }

    actions: UserActionType[] = ['Delete', 'Deactivate'];
    users = ['User One', 'User Two'];

    performAction(userAction: UserActionType, user: string) {
        this.invoker.execute(userAction, user, () => {
            console.log('action done!!!!!');
        });
    }
}

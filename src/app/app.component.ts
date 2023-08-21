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

    protected actions: UserActionType[] = ['Delete', 'Deactivate'];
    protected users = ['User One', 'User Two'];

    protected performAction(userAction: UserActionType, user: string) {
        this.invoker.execute(userAction, user, () => {
            console.log('action done!!!!!');
        });
    }
}

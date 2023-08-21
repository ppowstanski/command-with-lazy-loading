import {Component} from '@angular/core';

import {UserActionInvoker, UserActionType} from '@app/features/user-actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    protected actions: UserActionType[] = ['Delete', 'Deactivate'];
    protected users = ['User One', 'User Two'];

    constructor(private invoker: UserActionInvoker) {
    }

    protected performAction(userAction: UserActionType, user: string) {
        this
            .invoker
            .execute(userAction, user)
            .subscribe({
                error: err => console.error(`Error occurred while performing action: '${err}'`),
                complete: () => console.log(`Action done!`)
            }
        );
    }
}

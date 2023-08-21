import {Component} from '@angular/core';
import {take} from 'rxjs';

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
        this.invoker.execute(userAction, user)
            .pipe(
                take(1)
            )
            .subscribe({
                next: () => console.log(`Action done!`),
                error: err => console.error(`Error occurred while performing action: '${err}'`)
            });
    }
}

import {UserAction} from '..';
import {DeactivateUserService} from './deactivate-user.service';
import {filter, of, switchMap, tap} from 'rxjs';

export class DeactivateUserCommand implements UserAction {
    constructor(private readonly commandService: DeactivateUserService) {
    }

    execute(user: string, callback: () => void): void {
        of(undefined).pipe(
            switchMap(() => this.commandService.confirm()),
            filter(confirmed => confirmed),
            switchMap(() => this.commandService.deactivate(user)),
            tap(() => callback())
        ).subscribe();
    }
}
import {Injectable} from '@angular/core';
import {UserAction} from '@app/user-actions';

@Injectable()
export class DeactivateUserService implements UserAction {
    execute(user: string, callback: () => void): void {
        console.log(`Deactivate user:' ${user}'`);
        callback();
    }
}

import {UserAction} from '@app/user-actions';
import {Injectable} from '@angular/core';

@Injectable()
export class DeleteUserService implements UserAction {

    execute(user: string, callback: () => void): void {
        console.log(`Delete user:' ${user}'`);
        callback();
    }
}

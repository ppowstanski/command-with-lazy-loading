import {Injectable} from '@angular/core';

@Injectable()
export class DeleteUserService {
    execute(user: string, callback: () => void): void {
        console.log(`Delete user:' ${user}'`);
        callback();
    }
}

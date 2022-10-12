import {Injectable} from '@angular/core';

@Injectable()
export class DeactivateUserService {
    execute(user: string, callback: () => void): void {
        console.log(`Deactivate user:' ${user}'`);
        callback();
    }
}
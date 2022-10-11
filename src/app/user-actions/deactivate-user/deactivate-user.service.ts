import {UserAction} from "../user-action";

export class DeactivateUserService implements UserAction{
    execute(user: string, callback: () => void): void {
        console.log(`Deactivate user:' ${user}'`);
        callback();
    }
}

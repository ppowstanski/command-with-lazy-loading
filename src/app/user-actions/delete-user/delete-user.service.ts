import {UserAction} from "../user-action";

export class DeleteUserService implements UserAction {
    execute(user: string, callback: () => void): void {
        console.log(`Delete user:' ${user}'`);
        callback();
    }
}

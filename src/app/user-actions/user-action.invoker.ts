import {DeleteUserService} from "./delete-user/delete-user.service";
import {DeactivateUserService} from "./deactivate-user/deactivate-user.service";
import {UserAction} from "./user-action";

export class UserActionInvoker {
    static execute(userAction: string, user: string, callback: () => void): void {
        let action: UserAction;

        switch (userAction) {
            case 'Delete':
                action = new DeleteUserService();
                break;
            case 'Deactivate':
                action = new DeactivateUserService();
                break;
            default:
                console.log(`Unknown action '${userAction}'.`);
                return;
        }

        action.execute(user, callback);
    }
}
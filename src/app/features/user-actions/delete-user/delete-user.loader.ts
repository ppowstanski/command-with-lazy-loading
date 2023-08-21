import {DeleteUserModule} from './delete-user.module';
import {from, map, Observable, of, tap} from 'rxjs';
import {createNgModule, Injector, NgModuleRef} from '@angular/core';

import {UserAction} from '@app/features/user-actions';

export class DeleteUserLoader {
    private static moduleCache: DeleteUserModule;

    public static createInstance(injector: Injector): Observable<UserAction> {
        if (!!DeleteUserLoader.moduleCache) {
            return of(DeleteUserLoader.moduleCache.createCommandInstance());
        }

        return from(
            import('./delete-user.module').then(m => createNgModule<DeleteUserModule>(m.DeleteUserModule, injector)))
            .pipe(
                tap((m: NgModuleRef<DeleteUserModule>) => DeleteUserLoader.moduleCache = m.instance),
                map(() => DeleteUserLoader.moduleCache.createCommandInstance())
            );
    }
}
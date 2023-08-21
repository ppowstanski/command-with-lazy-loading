import {from, map, Observable, of, tap} from 'rxjs';
import {createNgModule, Injector, NgModuleRef} from '@angular/core';

import {UserAction} from '@app/features/user-actions';

import {DeactivateUserModule} from './deactivate-user.module';

export class DeactivateUserLoader {
    private static moduleCache: DeactivateUserModule;

    public static createInstance(injector: Injector): Observable<UserAction> {
        if (!!DeactivateUserLoader.moduleCache) {
            return of(DeactivateUserLoader.moduleCache.createCommandInstance());
        }

        return from(
            import('./deactivate-user.module').then(m => createNgModule<DeactivateUserModule>(m.DeactivateUserModule, injector)))
            .pipe(
                tap((m: NgModuleRef<DeactivateUserModule>) => DeactivateUserLoader.moduleCache = m.instance),
                map(() => DeactivateUserLoader.moduleCache.createCommandInstance())
            );
    }
}
import {from, map, Observable, of, tap} from 'rxjs';
import {UserAction} from '@app/users-actions';
import {createNgModule, Injector, NgModuleRef} from '@angular/core';
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
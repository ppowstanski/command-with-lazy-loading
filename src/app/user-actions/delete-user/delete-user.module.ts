import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeleteUserService} from './delete-user.service';

@NgModule({
    declarations: [],
    providers: [
        DeleteUserService
    ],
    imports: [
        CommonModule
    ]
})
export class DeleteUserModule {
    constructor(readonly command: DeleteUserService) {
    }
}

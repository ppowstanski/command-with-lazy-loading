import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ConfirmationModule} from '@app/shared/confirmation';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ConfirmationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

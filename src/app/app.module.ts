import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {BrowserModule} from '@angular/platform-browser';

import {ConfirmationModule} from '@app/shared/confirmation';
import {AppComponent} from './app.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ConfirmationModule,
        MatButtonModule,
        MatCardModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

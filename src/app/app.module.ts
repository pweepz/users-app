import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/reducers';
import { EffectsModule } from '@ngrx/effects';


export const ReducerToken = new InjectionToken('Users Registered Reducers');
export function getReducers() {
  return reducers;
}

export const ReducerProvider = [{ provide: ReducerToken, useFactory: getReducers }];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(ReducerToken, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }}),
    EffectsModule.forRoot([]),
  ],
  providers: [ReducerProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
  NotFoundComponent,
  UserInfoComponent,
  UserListComponent,
  ChatComponent,
  BadgeComponent,
  ChatMessageComponent,
  ChatFormComponent
} from './components';
import {
  UsersService,
  ConstantsService
} from './services';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    UserInfoComponent,
    UserListComponent,
    ChatComponent,
    BadgeComponent,
    ChatMessageComponent,
    ChatFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    UsersService,
    ConstantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

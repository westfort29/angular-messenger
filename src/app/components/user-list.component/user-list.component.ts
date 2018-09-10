import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import { ConstantsService, UsersService } from '../../services';
import { IUser } from '../../models';
import { delay } from 'rxjs/operators';
import * as messengerViewActions from '../../store/actions/messengerViewActions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit, OnDestroy {
  public viewState: string;
  public users: IUser[];
  private viewStates$: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private constants: ConstantsService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.viewStates$ = this.store
    .pipe(
      select(fromRoot.getCurrentView),
      delay(0)
    )
    .subscribe(
      (viewState) => {
        console.log(viewState);
        this.viewState = viewState;
      }
    );
    this.store.dispatch(new messengerViewActions.SetMessengerView(this.constants.viewSates.USERS_LIST));
    this.updateUsersList();
  }

  ngOnDestroy() {
    this.viewStates$.unsubscribe();
  }

  private updateUsersList(): void {
    this.usersService.getUsers()
    .subscribe(
      users => {
        this.users = users;
      }
    );
  }

  public getInitials(user: IUser): string {
    return user.firstName[0].toUpperCase() + user.lastName[0].toLocaleUpperCase();
  }

  public isChatView(): boolean {
    return this.viewState === this.constants.viewSates.CHAT;
  }

  public isUserInfoView(): boolean {
    return this.viewState === this.constants.viewSates.USER_INFO;
  }
}

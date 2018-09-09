import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConstantsService, UsersService } from '../../services';
import { IUserInfo } from '../../models';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import * as selectedUserActions from '../../store/actions/selectedUserActions';
import * as messengerViewActions from '../../store/actions/messengerViewActions';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit, OnDestroy {
  private activatedRouteSub: Subscription;
  public userInfo: IUserInfo | {} = {};
  public isChatVisible: boolean;
  private viewSates$: Subscription;
  @HostBinding('class.user-info') true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private constants: ConstantsService,
    private usersService: UsersService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.store.dispatch(new messengerViewActions.SetMessengerView(this.constants.viewSates.USER_INFO));
    this.activatedRouteSub = this.activatedRoute.params.subscribe(
      params => {
        const userId = parseInt(params['id']);
        this.store.dispatch(new selectedUserActions.SetUserId(userId));
        this.usersService.getUserInfoById(userId).subscribe(userInfo => this.userInfo = userInfo);
      }
    );
    this.viewSates$ = this.store
    .pipe(
      select(fromRoot.getCurrentView),
      delay(0)
    )
    .subscribe(
      viewState => {
        this.isChatVisible = viewState === this.constants.viewSates.CHAT;
      }
    );
  }

  ngOnDestroy() {
    this.activatedRouteSub.unsubscribe();
    this.store.dispatch(new messengerViewActions.SetMessengerView(this.constants.viewSates.USERS_LIST));
    this.viewSates$.unsubscribe();
  }
}

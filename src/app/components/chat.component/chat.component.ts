import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ConstantsService } from '../../services';
import { IChatMessage, IUser } from '../../models';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import * as messengerViewActions from '../../store/actions/messengerViewActions';
import { appearingAnimation } from '../../animations';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [appearingAnimation]
})

export class ChatComponent implements OnInit, OnDestroy {
  public messageText = '';
  public chatHistory: IChatMessage[] = [];

  constructor(
    private constants: ConstantsService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.store.dispatch(new messengerViewActions.SetMessengerView(this.constants.viewSates.CHAT));
  }

  ngOnDestroy() {
    this.store.dispatch(new messengerViewActions.SetMessengerView(this.constants.viewSates.USER_INFO));
  }

  public onSendMessage(messageText: string) {
    this.chatHistory.push({
      body: messageText,
      date: new Date().getTime(),
      author: {
        id: 0,
        firstName: 'Current',
        lastName: 'User'
      }
    });
  }
}

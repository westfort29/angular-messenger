import { Component, Input } from '@angular/core';
import { IUser, IChatMessage } from '../../models';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html'
})

export class ChatMessageComponent {
  @Input() message: IChatMessage;

  public getInitials(author: IUser): string {
    return author.firstName[0].toUpperCase() + author.lastName[0].toLocaleUpperCase();
  }
}

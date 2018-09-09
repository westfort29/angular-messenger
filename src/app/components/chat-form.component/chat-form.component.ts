import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['chat-form.component.scss']
})

export class ChatFormComponent {
  @Output() sendMessage = new EventEmitter<string>();
  public messageText = '';
  @ViewChild('textArea') textAreaNode;

  public onSendMessage() {
    if (this.messageText.trim()) {
      this.sendMessage.emit(this.messageText.trim().replace(new RegExp('\n', 'g'), '<br />'));
      this.messageText = '';
      this.textAreaNode.nativeElement.focus();
    }
  }

  public resizeTextArea() {
    this.textAreaNode.nativeElement.style.height = '50px';
    this.textAreaNode.nativeElement.style.height = this.textAreaNode.nativeElement.scrollHeight + 'px';
  }
}

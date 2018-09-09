import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['badge.component.scss']
})

export class BadgeComponent {
  @Input() content: string;

  @HostBinding('class.badge') true;
}

import {
  trigger,
  animate,
  transition,
  style
} from '@angular/animations';

export const appearingAnimation =  trigger(
  'appearingAnimation', [
    transition(':enter', [
      style({opacity: 0}),
      animate('300ms', style({opacity: 1}))
    ])
  ]
);

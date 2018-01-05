import { animate, style, transition, trigger } from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition(':enter', [
    style({ opacity: 0, position: 'absolute', width: '100%', 'z-index': -1 }),
    animate('.4s ease', style({ opacity: '*' })),
  ]),
  transition(':leave', [
    animate('.4s ease', style({ opacity: 0 })),
  ]),
]);

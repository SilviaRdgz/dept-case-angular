import { animate, group, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({opacity: 0})),
  transition (':enter, :leave', [
    animate(2000)])
  ])

export let fadeTitle = trigger('fadeTitle', [
  state('void', style({opacity: 0})),
  transition (':enter, :leave', [
    animate(3000)])
])



// export let slideIn = [
//   trigger('slideIn', [
//     state('void', style({
//       'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
//     })),
//     transition(':enter, :leave', [group([
//         animate('400ms ease-in-out', style({
//           'opacity': '0'
//         })),
//         animate('600ms ease-in-out', style({
//           'max-height': '0px'
//         })),
//         animate('700ms ease-in-out', style({
//           'visibility': 'hidden'
//         }))
//       ]
//     )]),
//     transition('out => in', [group([
//         animate('1ms ease-in-out', style({
//           'visibility': 'visible'
//         })),
//         animate('600ms ease-in-out', style({
//           'max-height': '500px'
//         })),
//         animate('800ms ease-in-out', style({
//           'opacity': '1'
//         }))
//       ]
//     )])
//   ]),
// ]

import { trigger, state, transition, style, animate, keyframes} from '@angular/animations'

export let fadeFrom = trigger('fadeFrom', [
    state('hidden', style({ opacity: 0, transform: 'translateX({{initialPos}}px)'}),{
        params:{
            initialPos:"0"
        }
    }),
    transition('hidden => shown', [
        animate("0.5s  ease-out")
    ]),
])


// export let toLargeToSmall = trigger('toLargeToSmall', [
//     // state('void', style({ opacity: 0, transform: 'translateX(-50px)'})),
//     transition(':enter', [
//         animate("0.5s ease-out", keyframes([
//             style({
//                 offset:.5,
//             })
//         ]))
//     ])
// ])
  

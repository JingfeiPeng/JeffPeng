import { trigger, state, transition, style, animate} from '@angular/animations'

export let fade = trigger('fade', [
  state('void', style({ opacity: 0, transform: 'translateX(-30px)'})),
  transition(':enter, :leave', [
    animate(500)
  ]),
])


export let fadeOut = trigger('fadeOut', [
  state('void', style({ 
    opacity: 0
  })),
  transition(':leave', [
    animate(1200)
  ]),
])

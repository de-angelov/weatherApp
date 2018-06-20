import {BREAKPOINT, DISABLE_DEFAULT_BREAKPOINTS} from '@angular/flex-layout';

const NEW_BREAKPOINTS = [
  {
    alias: "lt-md",
    mediaQuery: "(max-width: 959px)",
    overlapping: true,
},
{
  alias: 'gt-sm',
  suffix: 'gt-sm',
  mediaQuery: 'screen and (min-width: 767px)',
  overlapping: false
},

];

export const CustomBreakPointsProvider = [
//   {provide: DISABLE_DEFAULT_BREAKPOINTS,
//     useValue: true
//   },
  { 
    provide: BREAKPOINT,
    useValue: NEW_BREAKPOINTS,
    multi: true
  }
];
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvidedInRootService {
  constructor() {
    console.log(`I'm not imported in any other module and I'm provided in 'root'; I should be tree shaked.`);
  }
}

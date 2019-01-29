import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImportedProvidedInRootService {
  constructor() {
    console.log(`I'm imported in another module and I'm provided in 'root'; I should NOT be tree shaked.`);
  }
}

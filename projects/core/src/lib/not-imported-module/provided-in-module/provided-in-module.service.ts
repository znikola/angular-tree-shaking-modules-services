import { Injectable } from '@angular/core';

import { ProvidedInModuleModule } from './provided-in-module.module';

@Injectable({
  providedIn: ProvidedInModuleModule
})
export class ProvidedInModuleService {
  constructor() {
    console.log(
      `I'm not imported in any other module and I'm provided in ProvidedInModuleModule; I should be tree shaked.`
    );
  }
}

import { Injectable } from '@angular/core';

import { ImportedProvidedInModuleModule } from './imported-provided-in-module.module';

@Injectable({
  providedIn: ImportedProvidedInModuleModule
})
export class ImportedProvidedInModuleService {
  constructor() {
    console.log(
      `I'm imported in another module and I'm provided in ProvidedInModuleModule; I should be NOT tree shaked.`
    );
  }
}

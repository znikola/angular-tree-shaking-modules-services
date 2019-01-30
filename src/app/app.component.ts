import { Component } from '@angular/core';

import { ImportedProvidedInModuleService, ImportedProvidedInRootService } from '@test/core';
// import { ImportedProvidedInModuleService, ImportedProvidedInRootService } from 'projects/core/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private importedProvidedInModuleService: ImportedProvidedInModuleService,
    private importedProvidedInRootService: ImportedProvidedInRootService
  ) {
    console.log(`importedProvidedInModuleService`, this.importedProvidedInModuleService);
    console.log(`importedProvidedInRootService`, this.importedProvidedInRootService);
  }
}

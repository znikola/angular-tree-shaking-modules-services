import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImportedProvidedInModuleModule } from '@test/core';
// import { ImportedProvidedInModuleModule } from 'projects/core/src/lib/imported-module/provided-in-module/imported-provided-in-module.module';

@NgModule({
  imports: [BrowserModule, ImportedProvidedInModuleModule]
})
export class AnotherModule {}

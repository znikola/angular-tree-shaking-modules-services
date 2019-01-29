import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImportedProvidedInModuleModule } from 'projects/core/src/lib/imported-module/provided-in-module/imported-provided-in-module.module';
import { AnotherModule } from './another-module/another.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ImportedProvidedInModuleModule, AnotherModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SummaryPipe } from './pipes/summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AccordionPanelComponent,
    AccordionComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

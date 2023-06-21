import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { MemberDialogComponent } from './member-dialog/member-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberDialogComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PipesPipe } from './pipes.pipe';
import { CdDirective } from './cd.directive';
import { TransferComponent } from './transfer/transfer.component';
import { LoginComponent } from './login/login.component';
import { LogerComponent } from './loger/loger.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesPipe,
    CdDirective,
    TransferComponent,
    LoginComponent,
    LogerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

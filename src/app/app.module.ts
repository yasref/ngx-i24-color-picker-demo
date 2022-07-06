import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxI24ColorPickerModule } from 'ngx-i24-color-picker';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxI24ColorPickerModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, DoublePipe } from './app.component';
import { MyTableComponent } from './my-table.component';

@NgModule({
  declarations: [AppComponent, MyTableComponent, DoublePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

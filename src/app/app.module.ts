import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './layoutComponents/header/header.component';
import { BookContentComponent } from './components/book-content/book-content.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { LeftComponent } from './commenComponents/left/left.component';
import { BooksComponent } from './commenComponents/books/books.component';
import { DetailComponent } from './commenComponents/detail/detail.component';
import { BookInfoComponent } from './listComponents/book-info/book-info.component';
import { StarComponent } from './utilsComponents/star/star.component';
import { BookServer } from './dataServer/BookServer';
import { BookTypeServer } from './dataServer/BookTypeServer';
import { HttpModule, JsonpModule } from '@angular/Http';
import { DataFactory } from './dataServer/DatasFactory';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookContentComponent,
    AboutMeComponent,
    LeftComponent,
    BooksComponent,
    DetailComponent,
    BookInfoComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [
      BookServer,
      BookTypeServer,
      DataFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

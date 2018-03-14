import { Component, OnInit, Input } from '@angular/core';
import { DataFactory } from '../../dataServer/DatasFactory';
import { Book } from '../../entity/Book';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  @Input()
  public book:Book;

  constructor(
      public df:DataFactory
  ) { }

  ngOnInit() {
  }

}

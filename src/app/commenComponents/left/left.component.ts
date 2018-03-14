import { Component, OnInit } from '@angular/core';
import { BookTypeServer } from '../../dataServer/BookTypeServer';
import { DataFactory } from '../../dataServer/DatasFactory';
import { BookType } from '../../entity/BookType';
import { BookParams } from '../../entity/BookParams';
import { BookServer } from '../../dataServer/BookServer';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent{

  // private bookTypes:Array<BookType>;
  // private msg:string;
  // private obj:Object;
  public params:BookParams = new BookParams();

  constructor(
    public bts:BookTypeServer,
    public bs:BookServer,
    public bf:DataFactory
  ) { 
    console.log(bf);
    // 当获取的数据 只是静态数据，不需要重新获取或更改
    // 当获取的数据 不是静态数据，需要重复渲染时，请保证最后获取的数据是 引用类型
    // 如果是数组 需要注意引用方式
    // this.bookTypes = bf.bookTypes;
    // this.msg = bf.testMsg;
    // this.obj = bf.testObj;
  }

  public seachBooks(){
    this.bs.loadBooks(this.params);
  }

}

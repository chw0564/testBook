import { Book } from "../entity/Book";
import { BookType } from "../entity/BookType";

// 统一的数据管理
export class DataFactory{

    public testMsg:string = "aaa";
    public testObj:Object = {
        info:"测试消息"
    }




    public books:Array<Book>;

    // public book:Book;

    public bookTypes:Array<BookType>;



    constructor(){
        console.log("DataFactory 被创建")
    }


}
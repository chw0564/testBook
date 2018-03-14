import { URLSearchParams } from "@angular/Http";

export class BookParams{
   
    constructor(
        public bookId:string = "",
        public bookName:string = "",
        public bookPrice:string = "",
        public bookType:string = ""
    ){}

    public getParamas():URLSearchParams{
        let params = new URLSearchParams();
        params.append("bookName",this.bookName);
        params.append("bookPrice",this.bookPrice);
        params.append("bookType",this.bookType);
        params.append("bookId",this.bookId);
        return params;
    }
}
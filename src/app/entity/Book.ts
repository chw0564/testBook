export class Book{
    constructor(
        public id?:string,
        public bookName?:string,
        public price?:string,
        public des?:string,
        public url?: string,
        public typeId?: string,
        public level?: string
    ){}
}
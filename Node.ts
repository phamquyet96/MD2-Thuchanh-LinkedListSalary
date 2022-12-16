export class Node<T>{
    month:string;
    money:number;
    next:Node<T>| null=null;
    constructor(month:string, money:number) {
        this.month = month;
        this.money = money;
    }

}
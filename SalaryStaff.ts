import {Node} from "./Node";

export class SalaryStaff{
    head:Node<any>|null=null;
    tail:Node<any>|null=null;
    size:number=0;
    addFirst(month,money):void{
        let node=new Node(month,money);
        node.next=this.head;
        this.head=node;

        if(!this.tail){
            this.tail=node;
        }
        this.size++;
    }
    addLast(month,money):void{
        let node=new Node(month,money);
        if(!this.head){
            this.addFirst(month,money);
        }else{
            this.tail.next=node;
            this.tail=node;
            this.size++;
        }
    }
    displayNode(){
        let currentData = this.head;
        let result = [];
        while (currentData!=null) {
            result.push([currentData.month, currentData.money]);
            currentData = currentData.next;
        }
        return result;
    }
    totalSalary(){
        let sum=0;
        let currentData = this.head;
        while (currentData!=null){
            sum+=currentData.money;
            currentData = currentData.next;
        }
        return sum;
    }
    MaxMonthSalary(){
        let currentData = this.head;
        let MaxSalary=this.head.money;
        let result=[];
        while (currentData!=null){
            if(currentData.money>MaxSalary){
                MaxSalary=currentData.money;
                result.push([currentData.month,currentData.money]);
            }
            currentData= currentData.next;
        }
        return result;
    }
}
import {SalaryStaff} from "./SalaryStaff";

let salary=new SalaryStaff();
salary.addFirst("December",1000000)
salary.addFirst("November",1500000)
salary.addFirst("October",2000000)
salary.addFirst("June",3000000)
salary.addFirst("July",2500000)

console.log(salary.displayNode())
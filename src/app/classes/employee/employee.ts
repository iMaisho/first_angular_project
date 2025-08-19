import { Workable } from "../../interfaces/workable";

export class Employee implements Workable{
    constructor(protected name: string, private salary: number){}

    work(){
        return "Je fais un travail générique."
    }

    getSalary(): number{
        return this.salary
    }
}

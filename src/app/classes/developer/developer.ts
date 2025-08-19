import { Employee } from "../employee/employee";

export class Developer extends Employee{
    constructor(name: string, salary: number, private favoriteLanguage: string){
        super(name, salary)
    }

    
    override work(): string{
        return `J'écris du code en ${this.favoriteLanguage}`
    }
}

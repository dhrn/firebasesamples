export class Employee {


    constructor(public $key: string,
                public name: string,
                public gender: string,
                public age: number,
                public company: string,
                public position: string) {

    }

    static fromJsonList(array): Employee[] {
        return array.map(Employee.fromJson);
    }

    static fromJson({$key, name, gender, age , company , position}): Employee {
        console.log('new user', $key, name, gender, age);
        return new Employee($key, name, gender, age , company , position);
    }


}













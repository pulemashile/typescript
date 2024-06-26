class exercise4 {
    name: string;
    age: number;
    private socialSecurityNumber: string;
  
    constructor(name: string, age: number, socialSecurityNumber: string) {
      this.name = name;
      this.age =age;
      this.socialSecurityNumber =socialSecurityNumber;
    }
  
    getName(): string {
      return this.name;
    }
    getAge(): number {
        return this.age;
      }
  }
  
  let person=new exercise4("lerato",21,"pee")

  console.log(person.getName())

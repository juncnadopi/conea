class Person {
  private name: string;
  private occupation: string;

  constructor(name: string, occupation: string) {
    this.name = name;
    this.occupation = occupation;
  }

  public describe(): string {
    return `${this.name} is a ${this.occupation}`;
  }
}

// Usage
const person = new Person('Alice', 'engineer');
console.log(person.describe());

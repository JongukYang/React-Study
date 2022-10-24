class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this.name + ", " + this.age);
    }
}
const tom = new Person("Tom", 10);
tom.print();
class Developer extends Person {
    constructor(name, age, field) {
        super(name, age);
        this.field = field;
    }
    print() {
        super.print();
        console.log(`field : ${this.field}`);
    }
}
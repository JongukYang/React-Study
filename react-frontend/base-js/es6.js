// console.log(name);

// var name = "whddnr";
// const user = "whddnr";

// console.log(user);
// console.log(name);

const tom = {
    name: "tom",
    age: 25,
    height: 180
}

const {name, age, height} = tom
console.log(name, age, height)

var lck = {
    name: "lck",
    print1: function() {
        console.log(`[print1-1] name : ${this.name}`);
        (function() {
            console.log(`[print1-2] name : ${this.name}`);
        })();
    },
    print2: function() {
        console.log(`[print2-1] name : ${this.name}`);
        var me = this;
        (function() {
            console.log(`[print2-2] name : ${this.name}`);
        })();
    },
    print3: function() {
        console.log(`[print3-1] name : ${this.name}`);
        (() => {
            console.log(`[print3-2] name : ${this.name}`);
        })();
    }
};
lck.print1();
lck.print2();
lck.print3();
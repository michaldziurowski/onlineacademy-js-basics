function Person(){
    this.name = "Michas";
    this.doIt = function(){
        inner();
        console.log("done");
    }

    function inner(){
        console.log("heavy lifting");
    }
}

var person = new Person();

console.log(person.name);
person.doIt();

console.log(person instanceof Person);
console.log(person.constructor);
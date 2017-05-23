var person = {
    name: "Michas",
    doIt: function(){
        console.log("done");
    }
}

console.log(person.name);
person.doIt();

console.log(person["name"]);
person["doIt"]();


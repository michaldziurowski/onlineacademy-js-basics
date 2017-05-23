function Ninja(name){
    this.name = name;    
}

Ninja.prototype.throw = function(){
    console.log(this.name + " throws shuriken");
}

var ninja = new Ninja("Yamike");
ninja.throw();




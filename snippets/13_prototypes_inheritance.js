function Japanese(name){
    this.name = name;
}

Japanese.prototype.makeTea = function(){
    console.log("I'm making tea.");
}

Japanese.prototype.origin = "Japan";

function Ninja(name){
    Japanese.call(this,name);
}

Ninja.prototype = Object.create(Japanese.prototype);

function Samurai(name){
    Japanese.call(this,name);
}

Samurai.prototype = Object.create(Japanese.prototype);

var ninja = new Ninja("Yaninja");
var samurai = new Samurai("Yosamurai");

console.log(ninja);
console.log(samurai);


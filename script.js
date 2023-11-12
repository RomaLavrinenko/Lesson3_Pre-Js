function CoffeeMake(name ){
    this.name = name;

}
CoffeeMake.prototype.on = function(){
    console.log(`${this.model}Make on ${this.name} , ${this.age} age`);
}
CoffeeMake.prototype.off = function(){
    console.log(`${this.model}Make off ${this.name} , ${this.age} age`);
}

function Kapelna(name , age , model){
    CoffeeMake.call(this , name );
    this.age = age;
    this.model = model;
}

Kapelna.prototype = Object.create(CoffeeMake.prototype);
Kapelna.prototype.constuctor = Kapelna;


function Rizkova(name , age , model){
    CoffeeMake.call(this , name );
    this.age = age;
    this.model = model;

}

Rizkova.prototype = Object.create(CoffeeMake.prototype);
Rizkova.prototype.constuctor = Rizkova;

function CoffeeMachine(name , age , model){
    CoffeeMake.call(this , name );
    this.age = age;
    this.model = model;
}

CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
CoffeeMachine.prototype.constuctor = CoffeeMachine;

let kape = new Kapelna('Kapelna' , 5 , 'Coffe');
kape.on();
let riz = new Rizkova('Rizkova' , 12 ,'Coffe' );
riz.off();
let coffema = new CoffeeMachine('Amerekamo from CoffeeMachine' , 1 , 'Coffe');
coffema.on();
coffema.off();



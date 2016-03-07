var Vehicle = function () {
    this.value = null;
    this.div = null;
    this.insert = function () {
        this.div = document.createElement('div');
        this.div.className = null;
        document.getElementById('containerDiv').appendChild(this.div);
        this.move();
        this.damage();
        this.remove();
        this.speed();
    }
}

function addCar() {
    var carDiv = new Vehicle();
    var someDiv = document.createElement('div');
    someDiv.className = 'carDiv';
    carDiv.div = someDiv;
    document.getElementById('containerDiv').appendChild(someDiv);
}

function addCopCar() {
    var copDiv = new Vehicle();
    var someDiv = document.createElement('div');
    someDiv.className = 'copDiv';
    copDiv.div = someDiv;
    document.getElementById('containerDiv').appendChild(someDiv);
}

function addMotorcycle() {
    var motorDiv = new Vehicle();
    var someDiv = document.createElement('div');
    someDiv.className = 'motorDiv';
    motorDiv.div = someDiv;
    document.getElementById('containerDiv').appendChild(someDiv);
}

function addTank() {
    var tankDiv = new Vehicle();
    var someDiv = document.createElement('div');
    someDiv.className = 'tankDiv';
    tankDiv.div = someDiv;
    document.getElementById('containerDiv').appendChild(someDiv);
}

function move() {

}

function damage() { //an array that counts damage points

}

function remove() {

}

function speed() { //a multiplier

}


var Car = function () {
    Vehicle.call(this); //this calls the parent's constructor - when setting up a child class, you have to call the parent class - DO THIS FIRST
}
Car.prototype = Object.create(Vehicle.prototype); //YOU MUST DO THIS FOR EVERY NEW SUBCLASS - DO THIS 2ND - IT MAKES A COPY OF THE PARENT PROTOTYPE
Car.prototype.constructor = Car; // YOU MUST DO THIS FOR EVERY NEW SUBCLASS -DO THIS 3RD



var CopCar = function () {
    Vehicle.call(this);
}
CopCar.prototype = Object.create(Vehicle.prototype);
CopCar.prototype.constructor = CopCar;



var Motorcycle = function () {
    Vehicle.call(this);
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;



var Tank = function () {
    Vehicle.call(this);
}
Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Tank;                
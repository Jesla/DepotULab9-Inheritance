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
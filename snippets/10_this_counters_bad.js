function Leg() {
    this.clickCount = 0;
    this.click = function () {
        this.clickCount++;
        console.log("Leg clicked " + this.clickCount + " times");
    }
}

function Arm() {
    this.clickCount = 0;
    this.click = function () {
        this.clickCount++;
        console.log("Arm clicked "+ this.clickCount + " times");
    }
}

var leftLeg = new Leg();
var leftArm = new Arm();

var clickCount = 0;

document.querySelector(".n--arm").addEventListener("click", leftArm.click);
document.querySelector(".n--leg").addEventListener("click", leftLeg.click);
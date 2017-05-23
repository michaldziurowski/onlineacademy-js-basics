function Leg() {
    var that = this;
    this.clickCount = 0;
    this.click = function () {
        that.clickCount++;
        console.log("Leg clicked " + that.clickCount + " times");
    }
}

function Arm() {
    var that = this;
    this.clickCount = 0;
    this.click = function () {
        that.clickCount++;
        console.log("Arm clicked "+ that.clickCount + " times");
    }
}

var leftLeg = new Leg();
var leftArm = new Arm();

var clickCount = 0;

document.querySelector(".n--arm").addEventListener("click", leftArm.click);
document.querySelector(".n--leg").addEventListener("click", leftLeg.click);
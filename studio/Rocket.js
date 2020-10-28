"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        var numHold = 0;
        if (items == undefined) {
            numHold = 0;
        }
        else {
            for (var i = 0; i < items.length; i++) {
                numHold += items[i].massKg;
            }
        }
        return numHold;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        var output = false;
        if (this.canAdd(cargo) == true) {
            this.cargoItems.push(cargo);
            output = true;
        }
        else {
            output = false;
        }
        return output;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var output = false;
        if (this.canAdd(astronaut) == true) {
            this.astronauts.push(astronaut);
            output = true;
        }
        else {
            output = false;
        }
        return output;
    };
    return Rocket;
}());
exports.Rocket = Rocket;

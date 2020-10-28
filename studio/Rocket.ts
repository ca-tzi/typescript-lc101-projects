//The rocket class
import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    sumMass( items: Payload[] ): number{
    let numHold: number = 0;
   
    if (items == undefined){
        numHold = 0;
    }else {
        for (let i = 0; i < items.length; i++){
            numHold += items[i].massKg;
        }
    }
    

    return numHold;
    
    }

    currentMassKg(): number{
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean{
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean{
        let output: boolean = false;
        if (this.canAdd(cargo) == true){
            this.cargoItems.push(cargo);
            output = true;
        }else {
            output = false;
        }
        return output;
    }

    addAstronaut(astronaut: Astronaut): boolean{
        let output: boolean = false;
        if (this.canAdd(astronaut) == true){
            this.astronauts.push(astronaut);
            output = true;
        }else {
            output = false;
        }
        return output;
    }



    
}
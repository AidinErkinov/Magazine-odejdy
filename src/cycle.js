export class Cycle {
    constructor () {
        this.rndnumber = 0;
        this.startTime = Date.now();
    }

    loop () {

    }

    static getRandomInt (min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
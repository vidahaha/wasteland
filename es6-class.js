class Vida {

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    toString() {
        return `(${this.x}, ${this.y})`
    }
}

let vida = new Vida('hello', 'world')
console.log(vida.toString())              //最基本
console.log(vida.constructor)
console.log(vida.__proto__ === Vida.prototype)

class Haha extends Vida {
    
    constructor(x, y) {
        this.x = x * x
        this.y = y * y
    }

    toString() {
        return `[${this.x}, ${this.y}]`
    }
}

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
        super(x, y)
        this.x = x * x
        this.y = y * y
    }

    toString() {
        return `[${this.x}, ${this.y}]`
    }

    paToString() {
        return super.toString()
    }

}

let haha = new Haha(4, 5)
console.log( haha instanceof Haha)
console.log( haha instanceof Vida)
console.log( haha.__proto__.__proto__)
console.log( Haha.__proto__ )
console.log( Haha.prototype )
console.log( haha.__proto__ )
console.log( haha.prototype )
console.log( haha.toString() )
console.log( haha.paToString()) //借用父方法

let foo = function() {
    console.log( this.name ) // ​​​​​[ 'hello', 'world' ]​​​​​, vida
}

foo( 'hello', 'world' )
foo.call({name: 'vida'})
console.log( this.name ) // ​​​​​[ 'hello', 'world' ]​​​​​

let boo = (...rest) => {
    console.log( this.name ) // ​​​​​[ 'hello', 'world' ]​​​​​, ​​​​​[ 'hello', 'world' ]​​​​​
}

boo( 'hello', 'world' )
boo.call({name: 'vida'})
console.log( this.name ) // ​​​​​[ 'hello', 'world' ]​​​​​
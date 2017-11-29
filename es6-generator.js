function* helloWorld() {
	yield 'hello'
	yield 'world'
	return 'ending'
}

let hw = helloWorld()

console.log( hw )
console.log( hw.next() )
console.log( hw.next() )
console.log( hw.next() )
console.log( hw.next() )

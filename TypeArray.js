let buffer = new ArrayBuffer(16)

let int32View = new Int32Array( buffer )

for (let i = 0; i < int32View.length; i++) {
	int32View[i] = i * 2
}

let int16View = new Int16Array( buffer )

console.log( int32View ) // { [Iterator]  '0': 0, '1': 2, '2': 4, '3': 6 }​​​​​
console.log( int16View ) // { [Iterator]  '0': 0, '1': 0, '2': 2, '3': 0, '4': 4, '5': 0, '6': 6, '7': 0 }​​​​​
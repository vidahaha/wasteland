let promise = new Promise((resolve, reject) => {
	console.log('promise')
	setTimeout(resolve, 0, 'done')
})

promise.then(( val )=>{
	console.log( val )
})

let p1 = new Promise((resolve, reject) => {
	setTimeout(() => reject('reject!'), 0)
})

let p2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve( p1 ), 0)
})

setTimeout(() => console.log('st_1'), 0)

p2.catch( error => console.log( error))
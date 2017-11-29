// 随着Web应用的发展，越来越多地需要使用JavaScript来处理视频、音频，
// 或者通过WebSocket获取原始数据。JavaScript的类型化数组(TypedArrays)
// 提供了一个更加高效的机制来访问和处理二进制数据。为了达到最大的灵活性和
// 高效性，JavaScript的TypedArray分为两个部分：缓冲区和视图。

let buffer = new ArrayBuffer(16)

let int32View = new Int32Array( buffer )

for (let i = 0; i < int32View.length; i++) {
	int32View[i] = i * 2
}

let int16View = new Int16Array( buffer )

console.log( int32View ) // { [Iterator]  '0': 0, '1': 2, '2': 4, '3': 6 }​​​​​
console.log( int16View ) // { [Iterator]  '0': 0, '1': 0, '2': 2, '3': 0, '4': 4, '5': 0, '6': 6, '7': 0 }​​​​​
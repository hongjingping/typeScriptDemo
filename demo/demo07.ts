// 不传递任何参数
let d:Date = new Date()
console.log(d)

// 传递一个整数 1970-01-01 00:00:00往前数1000ms
let d1:Date = new Date(1000) 
let d2:Date = new Date(2000) 
console.log(d1)
console.log(d2)

// 传递一个字符串
let d3:Date = new Date('2018/09/28 15:23:00')
let d4:Date = new Date('2018-09-28 15:23:00')
let d5:Date = new Date('2018-09-28T15:23:00')
console.log(d3)
console.log(d4)
console.log(d5)

// 
let d6:Date = new Date(year, month, day, hours, minutes, seconds, )

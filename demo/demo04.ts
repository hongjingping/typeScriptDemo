// 变量的作用域，函数划分
function plastic():void {
  var like:string = '刘德华'
  console.log('like', like)
}
plastic()

// console.log('like', like) // 报错，函数体内是一个封闭的作用域

// 全局变量、局部变量
var like2:string = '周杰伦'
function plastic2():void {
  console.log('like2', like2)
}
plastic()
console.log('like2', like2)

// 变量提升
var like3:string = '周杰伦'
function plastic3():void {
  var like3:string = '周杰'
  console.log('like3', like3)
}
plastic()
console.log('like3', like3)

function plastic4():void {
  var like4:string = '周杰伦'
  {
    let like5:string = '小沈阳'
    console.log('like5', like5)
  }
  console.log('like4', like4)
  console.log('like5', like5)
}
plastic4()
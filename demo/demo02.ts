// 1. 定义函数 参数
function searchPerson (age: number):string {
    return '找到了'+ age +'岁的人'
}

var age:number = 18
var result:string = searchPerson(age)

console.log('result', result)

// 2. 有可选参数的函数
function searchPerson2 (age: number, stature?:string):string {
  let yy:string = ''
  yy = '找到了' + age + '岁'
  if (stature != undefined) {
    yy = yy + stature
  }
  return yy + '的人'
}

var result2:string = searchPerson2(19)

console.log('result2', result2)

var result3:string = searchPerson2(20, '大长腿')

console.log('result3', result3)

// 3. 有默认参数的函数
function searchPerson3 (age:number = 22, stature: string="水蛇腰"):string {
  let yy:string = ''
  yy = '找到了' + age + '岁'
  if (stature != undefined) {
    yy = yy + stature
  }
  return yy + '的人'
}

var result4:string = searchPerson3()
console.log('result4', result4)

var result5:string = searchPerson3(28, '鹅蛋脸')
console.log('result5', result5)

// 有剩余参数的函数
function sarchPerson (...demand:string[]):string {
  let yy:string = '找到了'
  for (let i = 0; i < demand.length; i++) {
    yy = yy + demand[i]
    if (i < demand.length - 1) {
      yy = yy + ','
    }
  }
  yy = yy + '的人'
  return yy
}

var result6:string = sarchPerson('22', '大长腿', '瓜子脸', '水蛇腰')
console.log('result6', result6)
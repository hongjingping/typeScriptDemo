// 引用类型
let wikiHong = {
  name: 'wikiHong',
  website: 'wikiHong.com',
  age: 18,
  sayHello: function () {
    console.log('为了前端技术而努力')
  }
}
console.log(wikiHong.name)
wikiHong.sayHello()


// 数组---Array String Date RegExp

// 声明数组
let arr1:number[]
let arr2:Array<string>
let arr3:Array<boolean>

// 赋值---字面量
let arr4:number[] = []
let arr5:number[] = [1,2,3,4,5]
let arr6:Array<string> = ['wikiHong', '萍宝贝', 'kittyHong']
let arr7:Array<boolean> = [true, false, false]

// 赋值---构造函数
let arr8:number[] = new Array()
let arr9:number[] = new Array(1,2,3,4,5)
let arr10:Array<string> = new Array('wikiHong', '萍宝贝', 'kittyHong')
let arr11:Array<boolean> = new Array(true, false, false)

// let arr12:number[] = [1, 2, true]  // 报错，声明成什么类型，里面就必须是单一的类型

// 元祖(有顺序的)
let x:[string, number] 

x = ['wikihong', 10]


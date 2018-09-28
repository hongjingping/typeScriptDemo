// RegExp  string

// 构造函数声明法
let reg1:RegExp = new RegExp("wikiHong")
console.log(reg1)
let reg2:RegExp = new RegExp("wikiHong", "gim")
console.log(reg2)

// 字面量声明法
let reg3:RegExp = /RegExp/
let reg4:RegExp = /RegExp/gi

// test(string) exec(string)
let reg5:RegExp = /wikiHong/i
let website:string = 'wikiHong.com'
let results:boolean = reg5.test(website)
console.log(results)
console.log(reg5.exec(website))


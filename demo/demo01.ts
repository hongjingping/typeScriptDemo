var age:number = 18
var stature: number = 178.5
var age2:number = NaN

console.log('年龄', age) // 声明未赋值 undefined
console.log('身高:',stature) // num支持整型和浮点型
console.log('NaN:',age2) // NaN
console.log('----------------') 

var wikiHong:string = 'wikiHong是萍宝贝'
console.log('wikiHong:',wikiHong) // 字符串

// boolean true false
var b:boolean = true
var c:boolean = false

// enum 枚举类型  人:男人、女人、中性; 四季: 春夏秋冬
console.log('----------------') 
enum REN{men, women, gender}
enum REN2{men='男人', women='女人', gender='中性'}
console.log(REN.gender) // 下标 2
console.log(REN2.gender) // 中性

// any 
console.log('----------------')
var t:any = 10
t = 'wikiHong'
t = true
console.log(t)

// null


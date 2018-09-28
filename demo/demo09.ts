// 类是对象具体事务的一个抽象，对象是类的具体表现
class WikiHong{
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  say () {
    console.log('hello, wikiHong')
  }
}

let wikiHong88:WikiHong = new WikiHong('wikiHong', 18)
console.log(wikiHong88)
wikiHong88.say()
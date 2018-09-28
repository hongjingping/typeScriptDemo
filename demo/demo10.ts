// public
// protected
// private

class Kitty {
  public sex:string
  protected name:string
  private age: number
  public constructor(sex:string, name:string, age: number) {
    this.sex = sex
    this.name = name
    this.age = age
  }
  public sayHello () {
    console.log("hello")
  }
  protected sayLove () {
    console.log("I love you")
  }
}

let kittyHong:Kitty = new Kitty('女', 'kittyGuo', 18)
console.log(kittyHong.sex)
console.log(kittyHong.name)
console.log(kittyHong.age)
kittyHong.sayHello()
kittyHong.sayLove()

// 只读修饰符 readonly
class Man{
  public readonly sex:string = '男'
}
let man:Man = new Man()
man.sex = '女'
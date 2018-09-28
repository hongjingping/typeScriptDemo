class Wikihong{
  public sex:string
  protected name:string
  private skill: string
  public constructor(sex:string, name:string, skill: string) {
    this.sex = sex
    this.name = name
    this.skill = skill
  }
  public interest () {
    console.log('找小哥哥')
  }
}

let WikihongObj:Wikihong = new Wikihong('女', 'wikiHong','coding')
WikihongObj.interest()

class wikiHongBaby extends Wikihong {
  public xingxiang:string = "美美哒"
  public zhuangqian () {
    console.log('一天赚一个亿')
  }
}

let baby = new wikiHongBaby('男', '小美', '找小姐姐')
baby.interest()
baby.zhuangqian()

// 定义接口 ?可选参数
interface Husband {
  sex:string,
  interest: string,
  buyBag?: Boolean
}

let myHusband:Husband = {
  sex:'男',
  interest: '看书，做饭，做家务',
  buyBag: true
}

console.log(myHusband)

// 定义函数
interface SearchMan {
  (source: string, subString: string):boolean
}

let mySearch:SearchMan

mySearch = function (source: string, subString: string):boolean {
  let flag = source.search(subString)
  return (flag != -1)
}

console.log(mySearch('高、富、帅、德', '胖'))
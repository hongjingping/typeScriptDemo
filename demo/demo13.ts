namespace handsome {
  export class dehua {
    public name:string = '刘德华'
    talk () {
      console.log('我是刘德华')
    }
  }
}

namespace bajie {
  export class dehua {
    public name:string = '马德华'
    talk () {
      console.log('我是马德华')
    }
  }
}

let dehua1:handsome.dehua = new handsome.dehua()
let dehua2:bajie.dehua = new bajie.dehua()

dehua1.talk()
dehua2.talk()
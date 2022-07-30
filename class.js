class Point {
  // 静态属性
  static z = 10;
  // 构造方法
  constructor(x, y) {
    // this关键字则代表实例对象
    this.x = x;
    this.y = y;
  }

  SUM() {
    return this.x + this.y;
  }
  // static 表示为静态方法，不会被实例继承，只能直接通过类调用。父类的静态方法，可以被子类继承
  static hello() {
    return 'hello';
  }
// 私有方法，是只能在类的内部访问的方法和属性，外部不能访问。#为标识
  #MUL() {
    return 'MUL'
  }

  MMUL() {
    return this.#MUL()
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

}

const p1 = new Point(1, 2);
console.log(p1.SUM()); //3
console.log(p1.hasOwnProperty("x")); //true
console.log(p1.__proto__.hasOwnProperty("SUM")); // true

// console.log(p1.MUL(2, 3)); //p1.MUL is not a function
console.log(Point.hello()); //hello
console.log(p1.z) //undefined
console.log(Point.z) //10
// console.log(p1.MUL()) //p1.MUL is not a function
console.log(p1.MMUL()) //MUL

const p2 = new ColorPoint(3, 4, 'red')
console.log(ColorPoint.hello()) //hello
console.log(p2.SUM()) //7

// Object.getPrototypeOf(ColorPoint) === Point  因此，可以使用这个方法判断，一个类是否继承了另一个类。

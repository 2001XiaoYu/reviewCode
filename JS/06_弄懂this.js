/*
  this的几种绑定方式:
  1、默认绑定
  2、隐式绑定
  3、显示绑定
  4、new绑定
  ！！！
  1、函数在调用的时候会默认给this绑定一个值
  2、this的绑定和定义的位置没有关系
  3、this的绑定和调用方式以及调用的位置有关系
  4、this是在运行时被绑定的
*/
function foo() {
  console.log(this)
}

// 方式一：直接调用（默认绑定，this指向 window或global）
// foo()

// 方式二：将foo放到一个对象中，再调用（隐式绑定）
var obj = {
  name: "nie",
  foo: foo
}

// obj.foo() // obj对象

// 方式三：通过call/apply调用
// foo.call("abc") // String {"abc"} 对象 （显示绑定）

// 方式四：new绑定
/*
  1、创建一个全新的对象
  2、这个对象会被执行prototype连接
  3、这个新对象会绑定到函数调用的this上（this的绑定在这个步骤完成）
  4、如果函数没有返回其他对象，表达式会返回这个对象
*/

function Person(name) {
  console.log(this)
  this.name = name
}

let p = new Person("nie")
console.log(p)
/*
  如果一个函数被new操作符调用
  1.创建出来一个新的空对象
  2.this指向这个空对象
  3.执行函数体的代码块
  4.如果没有明确的返回一个非空对象，那么this指向的对象会自动返回
*/
function coder(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
  this.running = function() {
    console.log("running~");
  }
}

// 在函数调用的前面加 new 关键字（操作符）
let stu1 = new coder("why", 18, 1.88)
let stu2 = new coder("nie", 23, 1.78)

console.log(stu1, stu2)
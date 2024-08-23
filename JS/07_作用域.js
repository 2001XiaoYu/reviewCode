// 块级作用域
{
  let greeting = 'Hello World!'
  var lang = 'English'
  console.log(greeting);
}
console.log(lang)
console.log(greeting)

// 词法作用域
var a = 2;
function foo() {
  console.log(a)
}

function bar() {
  var a = 3
  foo()
}
bar() //2
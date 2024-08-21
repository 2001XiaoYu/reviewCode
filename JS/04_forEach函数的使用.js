let names = ["abc", "cba", "nba"]

// forEach函数：可以帮我们遍历数组

// 方法一（自己实现）
// function xyForEach(fn) {
//   for (let i = 0; i < names.length; i++) {
//     fn(names[i], i, names)
//   }
// }

// xyForEach(function(item, index, names) {
//   console.log("--------", item, index, names);
// })

// 方法二(直接用)
// names.forEach(function(item, index, names){
//   console.log("------", item, index, names);
// })

// 方法三
Array.prototype.xyForEach = function(fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this)
  }
}

// names.xyForEach(function(item, index, names){
//   console.log("----", item, index, names);
// })


const students = [
  { id: 100, name: "cai", age: 25 },
  { id: 101, name: "cao", age: 23 },
  { id: 102, name: "li", age: 22 },
  { id: 103, name: "nie", age: 21 },
]

students.xyForEach(function(item, index){
  console.log("+++", item, index);
})
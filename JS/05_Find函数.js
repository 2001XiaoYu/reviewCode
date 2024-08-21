// 1.原始类型的查找
let names = ["abc", "nba", "cba", "mba"]

// 原生find方法
const findName = names.find(function(item, index, arr) {
  console.log(item, index, arr)
  return item === "nba"
})
console.log(findName);

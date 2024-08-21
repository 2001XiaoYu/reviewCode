// 由 typeof 和 toString 结合实现全局通用的数据类型判断方法
function getType(obj) {
  let type = typeof obj
  if (type !== "object") { // 先进行typeof判断，如果是基础数据类型，直接返回
    return type
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object(\S+)\]$/, '$1')
}

// 使用如下
console.log(getType([]))
console.log(getType('123'))
console.log(getType(global))
console.log(getType(null))
console.log(getType(undefined))
console.log(getType())
console.log(getType(function(){}))
console.log(getType(/123/g))
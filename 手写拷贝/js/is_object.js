// 需求: 判断一个标识符是否为对象类型
function isObject(value) {
  // null,object,function,array
  // null -> object
  // function -> object
  // object/array -> object
  const valueType = typeof value
  return (value !== null) && ( valueType === "object" || valueType === "function")
}
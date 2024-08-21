// 递归实现

// function fibonacci(n) {
//   if (n === 1 || n === 2) return 1
//   return fibonacci(n-1) + fibonacci(n-2)
// }

// console.log(fibonacci(3));


// for循环实现

function fibonacci(n) {
  // 特殊的情况(前两个数字)
  if (n === 1 || n ===2 ) return
  
  // for循环实现
  let n1 = 1
  let n2 = 1
  let result = 0
  for (let i = 3; i <= n; i++) {
    result = n1 + n2
    n1 = n2
    n2 = result
  } 
  return result
}

console.log(fibonacci(5));
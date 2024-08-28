function fn(...args) {
  console.log(this, args)
}
let obj = {
  myName: "宇宇"
}

fn.apply(obj, [1,2])
fn(1,2)
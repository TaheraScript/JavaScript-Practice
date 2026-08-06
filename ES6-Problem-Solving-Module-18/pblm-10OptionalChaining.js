/*
  Problem 10: Safe Nested Access
  Safely access deeply nested optional data using ?. and ?? without
  throwing errors.

  Example: user?.address?.city ?? "City not found" when address is undefined
*/
let user1 ={
  isUser :true,
  address : {
    city : 'Dhaka',
  }
}
let user2 ={
  isUser :true,
  name : 'Beauty'
}

let safeNestedAccess = (user)=>{
  return ` ${user?.address?.city|| "City not found" } `
}

console.log(safeNestedAccess(user1))
console.log(safeNestedAccess(user2))

/*
  Problem 3: User Lookup by ID
  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/

    let  findUserById=(users, id)=>{
  let expectedId =users.find((user)=> user.id === 2)
if(!findUserById){
  return "User not found"
}
return expectedId
}
let users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]

    console.log(findUserById(users,2))
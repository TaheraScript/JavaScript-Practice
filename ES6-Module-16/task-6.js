/* Function Name Must be: extractUserInfo
একটি Social App-এর API একটি Nested User Object Return করে। Destructuring ব্যবহার করে Nested Data থেকে Name, Age এবং Hobby List-এর First Item বের করতে হবে।
Input
extractUserInfo(userObj) — userObj = { user: { name, age }, hobbies: […] }
Output / নিয়ম
Object এবং Array Destructuring ব্যবহার করতে হবে (Default এবং Rename সহ)
Return করতে হবে: "<name> (<age>) likes <firstHobby>"
hobbies Array Empty হলে firstHobby এর Default হবে "nothing yet"
Validation
Return "Invalid" যদি user.name না থাকে।
 */
function extractUserInfo(userObj) {
    if(userObj.hobbies.length === 0){
        return 'nothing yet'

    }
    const {user:name} = userObj
    const {user:age} = userObj
    const [firstHobby,,] =userObj
    return `${name} (${age}) likes ${firstHobby}`
}
console.log({user:{name:"Sadia",age:22}, hobbies:["reading","coding"]})
console.log({user:{name:"Rafi",age:19}, hobbies:[]}) 
console.log({user:{age:30}, hobbies:[]})
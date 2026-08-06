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
   
    if(!userObj.user.name){
        return 'Invalid'

    }
    const {user:{name : userName,age :userAge}} = userObj//can use below 2lines instead of this
    // const{user:{name :userName}} = userObj
    // const {user:{age :userAge}} = userObj
    const {hobbies:[firstHobby= 'nothing yet',,]} =userObj
    return `${userName} (${userAge}) likes ${firstHobby }`
}
console.log(extractUserInfo({user:{name:"Sadia",age:22}, hobbies:["reading","coding"]}))
console.log(extractUserInfo({user:{name:"Rafi",age:19}, hobbies:[]})) 
console.log(extractUserInfo({user:{age:30}, hobbies:[]}))
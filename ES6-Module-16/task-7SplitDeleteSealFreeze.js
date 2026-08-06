/* Function Name Must be: manageInventoryObject
একটি Warehouse System Object-ভিত্তিক Product Stock Manage করে। Action Parameter অনুযায়ী keys/values/entries বের করে, Property Delete করে, অথবা Object Seal/Freeze করে।
Input
manageInventoryObject(obj, action) — action হতে পারে: "keys" | "values" | "entries" | "delete:<propName>" | "seal" | "freeze"
নিয়ম (Rules)
"keys" → Object.keys(obj) Return করবে
"values" → Object.values(obj) Return করবে
"entries" → Object.entries(obj) Return করবে
"delete:propName" → propName Delete করে নতুন Object Return করবে
"seal" → Object.seal(obj) করে Return করবে (নতুন Property Add করা যাবে না)
"freeze" → Object.freeze(obj) করে Return করবে (কোনো Value পরিবর্তন করা যাবে না)
Validation
Return "Invalid" যদি obj Plain Object না হয় অথবা action এই List-এ না থাকে।
 */
function manageInventoryObject(obj, action) {
//     if ( !["keys", "values", "entries", "seal", "freeze"].includes(action) &&
//     !action.startsWith("delete:") )  
//we can use upper 2 lines as validation rather condition is given below
  if (
    typeof obj !== "object" ||
    obj === null ||
    Array.isArray(obj) ||
    (action !== "keys" &&
      action !== "values" &&
      action !== "entries" &&
      action !== "seals" &&
      action !== "freeze" &&
      !action.startsWith("delete:"))
  ) {
    return "Invalid";
  }
  if (action === "keys") {
    return Object.keys(obj);
  } else if (action === "values") {
    return Object.values(obj);
  } else if (action === "entries") {
    return Object.entries(obj);
  } else if (action.startsWith("delete:")) {
    let parts = action.split(":"); //it will split on array[ 'delete', 'c' ]
    let propertyName = parts[1]; //thats why we are using index
    // console.log(propertyName)
    delete obj[propertyName]; //can't use obj.propertyName ,because propertyName is a string
    return obj;
  } else if (action === "seal") {
    Object.seal(obj);
    return obj;
  } else if (action === "freeze") {
    Object.freeze(obj);
    return obj;
  }
}
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "keys"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "entries"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "delete:c"));
console.log(manageInventoryObject({ a: 1 }, "shrink"));

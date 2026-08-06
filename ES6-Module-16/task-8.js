/* Function Name Must be: printObjectDetails
একটি Product Catalog System একই Object তিন ভাবে Loop করে দেখাতে চায় — for…in, for…of + Object.entries, এবং Object.entries + Array Destructuring।
Input
printObjectDetails(obj, loopType) — loopType: "forin" | "forofentries" | "entriesDestructure"
নিয়ম (Rules)
"forin" → for...in দিয়ে প্রতি Key Loop করে "<key>: <value>" Array Return করবে
"forofentries" → for...of (Object.entries(obj)) দিয়ে একই Format Return করবে
"entriesDestructure" → Object.entries(obj).map এ [key, value] Destructure করে একই Format Return করবে
Validation
Return "Invalid" যদি loopType অচেনা হয়।
 */
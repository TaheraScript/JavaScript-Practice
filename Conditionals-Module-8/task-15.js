let isLoggedin = true;
let isAdmin = true;
if(isLoggedin || isAdmin){
    console.log("Admin Dashboard")
    if(isLoggedin && !isAdmin){
        console.log("User Dashboard")
    }
    else if(!isLoggedin){
        console.log("Please Login")
    }

}
//closure is when a function is able to remember and access its lexical scope ,even when that function is exicuting outside its lexical scope.


function createCounter(){ //parent function
    let counter = 0; //lexical scope
    return function(){ //inner function
       counter++;
        return counter;
    }
}
let result = createCounter()
console.log(result()) //need to call the result because result recieves the return,and as the return is a function,so we need to call it on console.log
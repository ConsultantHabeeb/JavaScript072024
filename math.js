function add(a,b)
{
    return (a+b);
};

function multiply(a,b)
{
    return (a*b);
};

function greet(name)
{
    console.log("Welcome  "+ name)
}

const ACCOUNT_NUMER = "432234"

//named 
export {add, multiply, ACCOUNT_NUMER };


//DEFAULT export
export default greet;

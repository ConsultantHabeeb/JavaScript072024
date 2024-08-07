function display(message)
{
    console.log(message);
}

function greet(name)
{
    console.log('Welcome :'+name);
}

function process(callbackfunction){

            callbackfunction('Rihab');
     
    }
//process(display);

process(greet)
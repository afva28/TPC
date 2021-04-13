let writeOutput = function(text)
{
    document.write(`<h2>${text}</h2>`);

}

writeOutput("Done!");

let truncateString = function(str,num)
{
    if(str.length <= num)
    {
        return str;
    }

    return str.slice(0,num)+"Hoje está um lindo dia";
    
}
    truncateString("Hoje está um lindo dia",22);
    truncateString("Hoje está um lindo dia",10);

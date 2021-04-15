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

    return str.slice(0,num)+'...';
    
}

document.write(truncateString("Hoje está um lindo dia",22));

document.write(truncateString("Hoje está um lindo dia",12));

let titleCase = function(str) 
{
    //return str.charAt(0).toUpperCase() + str.slice(1);

    var splitStr = str.toLowerCase().split(' ');

    for (var i = 0; i < splitStr.length; i++) 
    {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(' '); 

}
 
document.write(titleCase("hoje está muito sol"));

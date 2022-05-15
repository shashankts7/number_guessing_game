var p,q=0;
function load(){
p= prompt("Enter your name");
document.getElementById("any").innerHTML="Hello "+p;
}
var a,b,c=false,d,s=0;
function GenRad(){
if(q==0){
    a=Math.floor(Math.random()*10);
    document.getElementById("gen").innerHTML="Random value generated";
    q=1;
}
else{
    alert("Random value has been generated already");
}
}

function typo(b){
    document.getElementById("empty").innerHTML=b;
    c=true;
    d=b;
}

function submitt(){
if(s==0)
{
if(c==false)
{
    alert("Please choose a value");
}
else{
    if(confirm("Are you sure want to lock "+d+"?"))
    {
        document.getElementById("hide").style.display="none";
        document.getElementById("empty").innerHTML="The number "+d+" is locked";
    }
    s=1;
}
}
}
function reveal()
{
    if(s==1){
    if(q==1 && c==true)
    {
        if(a==d)
        {
            alert("The generated number is equal to chosen number ,You won!!");
        }
        else
        alert("The generated number is "+a+" not equal to chosen number ,You lost!!");
    q=0;
    document.getElementById("gen").innerHTML="Generate random number ";
    document.getElementById("empty").innerHTML="X";
    document.getElementById("hide").style.display="block";
    s=0;
    c=false;  
}
    else if(q==1 && c==false)
    {
        alert("Please choose a number");
    }
    else if(q==0 && c==true)
    {
        alert("Please generate a random number");
    }
    else
    alert("Please generate a random no and choose a number");
}
else
alert("Please click on submit button");
}

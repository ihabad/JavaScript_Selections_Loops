// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");




for(let i = 0; i < 100; i++)
{
   if(i % 2 == 0){
   continue;
   }
   else
   {
    console.log(i);
   }
}

for(let i = 0; i < 100; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0)
    {
    console.log("Fizz");
    }
    else if(i % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}


let i = 1;

while (i <= 100)
{ 
    let output = "";

if (i % 3 == 0)
{
output += "Fizz"
}
if(i % 5 ==0 )
{
    output += "buzz";
}
console.log('${i} ${output}');

i++;
}


let y = 1;

do
{ 
let output = "";

if (y % 3 == 0)
{
output += "Fizz"
}
if(y % 5 ==0 )
{
    output += "buzz";
}
console.log('${y} ${output}');

y++;
} 
while(y <= 100);




let FindValue = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
for (let i = 1; i <= n; i++)
  {
    if(i == FindValue) {
    console.log('${FindValue}');
    break;
  }
}
console.log('${FindValue} ${n}');




let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <=end; i++)
{
if(i % fizzDivisor === 0 && i % buzzDivisor){
    console.log('${i} FizzBuzz');
}else if (i % fizzBuzz == 0){
    console.log('${i} fizz')
}else if (i % buzzDivisor == 0){
    console.log('${i} Buzz');
}
else{
    console.log('${i}');
}
    }
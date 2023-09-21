// Q1.Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
let array=[16,88,45,63,27,61,28,51]
console.log(array[0])
function is_prime(number){
    if (number<=1){
        return false;
    }  
    if (number<=3){
        return true;
    }
    if (number%2==0 || number%3==0){
        return false;
    }
    let i=5;
    while (i*i<=number){
        if (number%i==0 || number % (i+2)==0){
            return false;
        }
        i+=6;
    }
    return true;
}
console.log(is_prime(array[0]))

// Q2 Write a JavaScript program to find the most frequent item of an array
var arr1=[1,5,4,1,1,1,2,5,3,5,6,5,8,5,5,6,1,5,5,9];
var max_f = 1;
var f = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 f++;
                if (max_f<f)
                {
                  max_f=f; 
                  item = arr1[i];
                }
        }
        f=0;
}
console.log(item+" ( " +max_f +" times ) ") ;



// Q3 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.
for (let j=0;j<=15;j++){
    if (j%2==0){
        console.log(j+'- even')
    }
    else {
        console.log(j+'- odd')
    }
}

// Q4 Write a JavaScript program to find the sum of squares of the elements of an array.
let sum=0
for (let i of array){
    sum+=i*i
}
console.log(sum)


/*

Print the below pattern

* * * * * * * * * 
  * * * * * * * 
    * * * * * 
      * * *
        *


*/



let n = 5;
let res = '';
let space = 0;
let stars = 9;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
        res += "  ";
    }
    for (let j = 1; j <= stars; j++) {
        res += "* ";
    }

    res += "\n"
    space++;
    stars -= 2;
}

console.log(res);
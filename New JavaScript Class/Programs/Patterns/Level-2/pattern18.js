
/*
 Print the below pattern 

        * 
      *   * 
    *       * 
  *           * 
* * * * * * * * * 


*/



let n = 5;
let res = '';
let space = n - 1;
let stars = 1;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
        res += "  ";
    }
    for (let j = 1; j <= stars; j++) {
        if (j == 1 || i == n || j == stars) {
            res += "* ";
        } else {
            res += "  "
        }
    }

    res += "\n"
    space--;
    stars += 2;
}

console.log(res);
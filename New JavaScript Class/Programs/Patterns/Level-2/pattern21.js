


/*

  print the below pattern


        *
      *   *
    *       *
  *           *
*               *
  *           *
    *       *
      *   *
        *

*/


let n = 9;
let res = '';
let space = 4;
let stars = 1;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
        res += "  ";
    }
    for (let j = 1; j <= stars; j++) {
        if (j == 1 || j == stars) {
            res += "* ";
        } else {
            res += "  "
        }
    }

    res += "\n"
    if (i <= Math.trunc(n / 2)) {
        space--;
        stars += 2;
    } else {
        stars -= 2;
        space++
    }


}

console.log(res);
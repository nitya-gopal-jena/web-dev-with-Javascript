
// Print below pattern

/*
  1 1 1 1 1 
  2 2 2 2 2 
  3 3 3 3 3 
  4 4 4 4 4 
  5 5 5 5 5 
*/

let n = 5;
let res = "";


for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        res += i + " "
    }
    res += "\n";

}

console.log(res);

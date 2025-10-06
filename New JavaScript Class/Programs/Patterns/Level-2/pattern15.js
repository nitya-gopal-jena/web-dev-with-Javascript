
/*

        5 
      5 4
    5 4 3
  5 4 3 2
5 4 3 2 1

*/


let n = 5;
let res = "";

for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i - 1; j++) {
        res += " " + " ";
    }

    for (let j = 5; j >= i; j--) {
        res += j + " ";
    }

    res += "\n"
}

console.log(res);


/*
Print the below pattern

    1
   21
  321
 4321
54321

*/



let n = 5;
let res = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        res += " ";
    }

    for (let j = i; j >= 1; j--) {
        res += j;
    }
    res += '\n';
}

console.log(res);

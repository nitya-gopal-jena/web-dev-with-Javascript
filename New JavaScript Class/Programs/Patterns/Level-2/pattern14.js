
/*
Print the below pattern

    5
   45
  345
 2345
12345


*/


let n = 5;
let res = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        res += " ";
    }

    for (let j = 6 - i; j <= n; j++) {
        res += j;
    }
    res += '\n';
}

console.log(res);

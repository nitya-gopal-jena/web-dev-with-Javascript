
/* Print the below pattern 

    5
    54
    543
    5432
    54321

*/


let res = ""
for (let i = 5; i >= 1; i--) {
    for (let j = 5; j >= i; j--) {
        res += j;
    }

    res += "\n"
}

console.log(res);

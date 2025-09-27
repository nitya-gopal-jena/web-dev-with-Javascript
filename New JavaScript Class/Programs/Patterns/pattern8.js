

/*  Print the below pattern, the pattern is K

    *  * 
    * *  
    *   
    * *  
    *  * 

*/

let res = ""

for (let i = 1; i <= 5; i++){
    for (let j = 1; j <= 3; j++){
        if (j == 1 || i+j==4 || i-j==2) {
            res+= "*"+" "
        } else {
            res+=" "
        }
    }

    res+= "\n"
}

console.log(res);

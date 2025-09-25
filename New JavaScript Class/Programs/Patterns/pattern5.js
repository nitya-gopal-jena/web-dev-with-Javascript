
// Print only odd number lines

/*

  * * * * *                       
  * * * * * 
  * * * * *   
  * * * * * 
  * * * * * 


It should be like this 

   * * * * * 

   * * * * * 

   * * * * * 

*/

let n = 5;
let res = "";


for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if(i%2 !=0)
        {
            res += "*" + " "
        }
    }
    res += "\n";

}

console.log(res);

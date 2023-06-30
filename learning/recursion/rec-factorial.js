// function factorial(num){
//     let total = 1;
//     for(let i = num; i > 1; i--){
//         total *= i
//     }
//     return total;
// }

function factorial(num){
    if (num < 0) return 0
    if (num <= 1) return 1;
    return num * factorial(num - 1)
}
factorial(3)
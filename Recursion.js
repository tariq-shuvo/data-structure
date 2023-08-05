// let arr = [12, 10, 13, 10]

// let i = 0;
// let sum = 0;
// function getArrayValue()
// {
//     if(i==arr.length) {
//         return sum;
//     }
//     sum += arr[i];
//     i++;
//     return getArrayValue(); 
// }

// let result = getArrayValue()

// console.log(result);

// function three() {
//     console.log('three')
// }

// function two() {
//     three();
//     console.log('two')
// }

// function one() {
//     two();
//     console.log('one')
// }

// one();

function facto(n){
    if (n==1) return 1;
    return n * facto(n-1);
}

console.log(facto(5));

// return 5 * facto(4)
// return 4 * facto(3)
// return 3 * facto(2)
// return 2 * facto(1)
// return 1 (LIFO Method)
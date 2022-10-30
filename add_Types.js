///Type 1 Addition///
console.log(1+2+3+4);

///Type 2 Addition///
let a = 1, b = 2, c = 3, d = 4;
let add = a + b + c + d;
console.log(add);

///Type 3 Addition///
let input1 = [1,2,3,4];
let sum1 = 0;
for(let i = 0; i < input1.length; i++){
    sum1 += input1[i];
}
console.log(sum1);

///Type 4 Addition///
let input2 = [1,2,3,4];
let sum2 = 0;
let i = 0;
while(i < input2.length){
    sum2 += input2[i];
    i++;
}
console.log(sum2);


///Type 5 Additiona///
let input3 = [1,2,3,4];
let sum3 = 0;
for(let i in input3){
    sum3 += input3[i]
}
console.log(sum3);


///Type 6 Addition///

let input4 = [1,2,3,4];
let sum4 = 0;
for(let i of input4){
    sum4 += i
}
console.log(sum4);


///Type 7 Addition///

let input5 = [1,2,3,4];
let sum5 = 0;
let i = 0;
do {
    sum5 += input5[i];
    i++;
}
while(i < input5.length);
console.log(sum5)


///Type 8  Addition///
let input6 = [1,2,3,4];
let sum6 = 0;
input6.map(function(value) {
    sum6 += value;
});
console.log(sum6);


///Type 9 Addition///

let input7 = [1,2,3,4];
let sum7 = 0;
input7.forEach(function(num) {
    sum7 += num;
})
console.log(sum7);

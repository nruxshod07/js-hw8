//1
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even = (num) => num % 2 == 0
let evenShow = nums.filter(even)
console.log(evenShow);
let odd = (num) => num % 2 !== 0
let oddShow = nums.filter(odd)
console.log(oddShow);
//2
let names = ['ayub', 'islom', 'daler', 'iskandar', 'shaxzod',]
let name = names.reduce(function (longest, currentWord) {
    if (currentWord.length > longest.length) {
        return currentWord;
    }
    return longest;
},);
console.log(name);
//3
let index = +prompt(names)
if (index === 0) {
    names.splice(index,1)
    console.log(names);
} else if (index === 1) {
    names.splice(index,1)
    console.log(names);
} else if (index === 2) {
    names.splice(index,1)
    console.log(names);
} else if (index === 3) {
    names.splice(index,1)
    console.log(names);
}else if (index === 4) {
    names.splice(index,1)
    console.log(names);
} else (console.log("error"))
//4
let cars = [20000,16000,40000,30000,35000,60000,13000,15000,45000,110000]
let from = +prompt('from')
let up = +prompt('up')
let available = (car) => car >= from && car <= up 
let availableCars = cars.filter(available)
console.log(availableCars);
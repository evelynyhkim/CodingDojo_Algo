let arr = [7, 9, 3, 8, 2, 6, 0]
let val = 1
let index = 3
let removeIndex = 4

/* push front */
let newArr = new Array(arr.length + 1)
for(let i = arr.length; i > 0; i--){
    newArr[i] = arr[i-1]
}
newArr[0] = val
console.log(newArr)

/* pop front */
for(let i = 0; i < arr.length-1; i++){
    arr[i] = arr[i+1]
}
arr.length -= 1
console.log(arr)

/* insert at */
arr.length += 1
for(let i = arr.length-1; i > index; i--){
    arr[i] = arr[i-1]
}
arr[index] = val
console.log(arr)

/* remove at */
for(let i = removeIndex; i < arr.length-1; i++){
    arr[i] = arr[i+1]
}
arr.length -= 1
console.log(arr)

/* swap pairs */
let temp
for(let i = 0; i < arr.length-1; i+=2){
    temp = arr[i]
    arr[i] = arr[i+1]
    arr[i+1] = temp
}
console.log(arr)

/* remove duplicates */
arr = [ 1, 1, 2, 3, 3, 3, 3, 4, 5, 5, 6, 7, 8, 9 ]
let i = 1, j = 1
while(i < arr.length){
    if(arr[i] !== arr[i-1]) {
        arr[j] = arr[i]
        i += 1
        j += 1
    }
    else i += 1
}
arr.length = j
console.log(arr)

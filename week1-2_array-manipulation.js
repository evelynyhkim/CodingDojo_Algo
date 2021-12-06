//let arr = [7, 9, 3, 8, 2, 6, 0]
let arr = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let temp
let len = arr.length
let shiftBy = -2

/* reverse */
for(let i = 0; i < len/2; i++){
    temp = arr[i] 
    arr[i] = arr[len-1-i]
    arr[len-1-i] = temp
}
console.log(arr)

/* rotate */
if(shiftBy > 0){
    shiftBy %= len
    for(let j = 0; j < shiftBy; j++){
        let i = len-1-j
        temp = arr[i]
        for(;i >= shiftBy; i-=shiftBy){
            arr[i] = arr[i-shiftBy]
        }
        arr[shiftBy-1-j] = temp
    }
}
else if(shiftBy < 0) {
    shiftBy = -1 * (Math.abs(shiftBy) % len)
    for(let j = 0; j < -shiftBy; j++){
        let i = j
        temp = arr[i]
        for(;i < len+shiftBy; i-=shiftBy){
            arr[i] = arr[i-shiftBy]
        }
        arr[len+shiftBy+j] = temp
        console.log(arr)
    }
}
console.log(arr)

/* filter range */
arr = [0, 9, 5, 4, 8, 3, 1, 2, 7, 6, 9, 4]
let min = 2, max = 6
let i = 0, j = 0
for(let i = 0; i < arr.length; i++){
    if(arr[i] >= min && arr[i] <= max) {
        arr[j] = arr[i]
        j += 1
    }
}
arr.length = j
console.log(arr)

/* concat */
let arr1 = ['a', 'b'], arr2 = [1, 2]
let newArr = new Array(arr1.length + arr2.length)

for(let i = 0; i < arr1.length; i++){
    newArr[i] = arr1[i]
}
for(let i = 0; i < arr2.length; i++){
    newArr[arr1.length + i] = arr2[i]
}
console.log(newArr)
// 利用set进行数组去重
let arr = [1, 2, 3, 4, 5, 3, 2];
// let arr1 = [1, 2, 3, 4, '2'];
// let list2 = new Set(arr);
// console.log(list2);

(function unique(arr){
    if(!Array.isArray(arr)){
        console.log('type error');
        return
    }
    //类数组 for..of 
    return Array.from(new Set(arr));
})()

//Write function to remove elements which are formed by same characters.
//e.g. input array ["1357", "7531", "2480", "0428", "1234", "2345", "3456"]
// output array ["1357", "2480", "1234", "2345", "3456"] 

function removeDuplicates(arr){
let sortedArray=[]
let resultArray=[]
//Iterate to each element in the input array and sort it
arr.forEach(element => {
let sortedElement = element.split('').sort().join('');
sortedArray.push(sortedElement)
})
console.log("The sorted array:",sortedArray)
//After sorting iterate to sort array and remove duplicates
let uniqueArray = [...new Set(sortedArray)];
console.log("The unique array:",uniqueArray)

//In unique array, go to each element and if the sorted element matches the orginal elements in the input array, keep the org elements in result
uniqueArray.forEach(sortedEle => {
    for(let orgEle of arr){
        if(orgEle.split('').sort().join('')===sortedEle){
            resultArray.push(orgEle)
            break;
        }
    }
})
return resultArray
}

let arr =  ["1357", "7531", "2480", "0428", "1234", "2345", "3456"]
console.log(removeDuplicates(arr))

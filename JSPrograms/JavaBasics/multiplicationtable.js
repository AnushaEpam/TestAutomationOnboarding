function multiplicationTable(table,desiredValue){
    for(let i =1;;i++){
        let result = i*table;
        if(result > desiredValue)
        {
            break;
        }
        console.log(`${table} * ${i} = ${result}`)
    }
}



let table = 15;
let desiredValue = 500;
multiplicationTable(table,desiredValue)
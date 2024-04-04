const employee=[
    {name:'Thomas Edwin',empid:'E111',salary:10000},
    {name:'Gregory Mathew',empid:'E555',salary:12000},
    {name:'Thomas Edison',empid:'E444',salary:8000},
    {name:'GregoryEdwin',empid:'E222',salary:6000},
    {name:'Isac Newton',empid:'E666',salary:20000},
    {name:'Thomas Gibson',empid:'E333',salary:4000}
]
//implement arrow functions on below array of objects.
//Write function to return all the Objects which contain name as "Edwin"

const filterByName = (employee,search) => employee.filter(emp => emp.name.includes(search))
const resultswithName = filterByName(employee,"Edwin")
console.log(resultswithName)

//write function to return all the employee ids and sum of total salaries.

const getEmpIdAndTotalSalary = (employee) => {
const empIds = employee.map(emp => emp.empid)

let totalSalary = employee.reduce((sum, employee) => sum + employee.salary, 0);
return {empIds, totalSalary};
}

console.log(getEmpIdAndTotalSalary(employee))
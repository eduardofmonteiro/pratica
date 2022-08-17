let weight

console.log(typeof weight)

 
let student = {
    name: "Eduardo",
    age: 25,
    weight: 86.7,
    isSubcribed: true,
}
 
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

let students = []

students = [
    student
]

console.log(students)

console.log(students[0]) 

const claudio = {
    name: "Claudio",
    age: 40,
    weight: 93.2,
    isSubcribed: true
}


students[1] = claudio

console.log(students)
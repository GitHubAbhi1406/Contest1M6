let array =  [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
];

array.map(myFunction);

function myFunction(x){
    let newAge = parseInt(x.age);
    return newAge;
}

document.getElementById("b1").innerHTML = console.log(array);
const person=[
    {
    id: 1,
    firstname: 'guri',
    lastname: 'sagoo',
    age: 24,
    hobbies: ['surfing', 'learning','gaming']
    
    },
    {
    id: 2,
    firstname: 'shane',
    lastname: 'ragbeer',
    age: 24,
    hobbies:['reading', 'theology']
    }
]


function Patrons(first, surname, dob){
    this.first= first;
    this.surname=surname;
    this.dob= new Date(dob);
}

const person1= new Patrons('kobe','bryant','3-3-1978')

console.log(person1)


const personJSON = JSON.stringify(person);
console.log(personJSON);

for(let pers of person){
    console.log(pers.hobbies);
}

//forEach, map, filter
person.forEach(function(peeps) {
    console.log(peeps.firstname);
})


const realage = person.filter(function(ages){
    return ages.age=== 24;
}).map(function(ages){
    return ages.lastname;
})

console.log(realage);


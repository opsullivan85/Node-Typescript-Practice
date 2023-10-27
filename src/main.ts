interface Person {
    age: number,
    name: string,
    say(): string
}

let mike = {
    age: 21, 
    name:"Owen", 
    say: function() { 
        return "My name is " + this.name + 
               " and I'm " + this.age + " years old!"
    }
}

function sayIt(person: Person) {
    return person.say();
}

console.log(sayIt(mike))

document.getElementById("index")!.innerHTML = "Changed by TypeScript!"
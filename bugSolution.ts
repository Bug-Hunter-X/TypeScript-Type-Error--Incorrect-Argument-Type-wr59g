function greeter(person: string) {
  return "Hello, " + person;
}

let user = "Jane Doe";

console.log(greeter(user)); //This will work correctly because the function expects a string, and it is receiving a string.

//Alternative solution:

function greeterArray(people: string[]) {
    return "Hello, " + people.join(' ');
}

let users = ["Jane", "Doe"];
console.log(greeterArray(users));
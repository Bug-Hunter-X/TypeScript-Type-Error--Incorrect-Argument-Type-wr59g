function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //This will cause a compilation error because the function expects a string, but it is receiving an array of strings. 
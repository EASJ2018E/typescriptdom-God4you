//interface Person {
   // firstName: string;
   // lastName: string;
//}

//function greeter(person: Person): string {
 //   return "Hello, " + person.firstName + " " + person.lastName;
//}
//let user: Person = { firstName: "John", lastName: "Doe" };

//let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
//element.innerHTML = greeter(user);



// Opgave 1.
// document har metoden getElementById, som vi bruger til og finde noget i index.htm "one"
// Prøv metode som kun returnener en node
let el = document.getElementById("two");
console.log(el);

// Metoder som returnerer en nodeliste

// one and three bliver vist i consolen som indholder "usundt" className. 
let list = document.getElementsByClassName("usundt");
console.log(list);
// hele listen i ul taggen bliver vist i consolen.
let tag = document.getElementsByTagName("ul");
console.log(tag);

// opgave 2.
let li = document.getElementsByTagName("li");
console.log(li);
for (let i = 0; i < li.length; i++) {
    console.log("Klasse navn: " + li[i].className + " Tekst: " + li[i].innerText)
}

// opgave 3.


let firstName = "Ola";
console.log(firstName);

let number = 1;
console.log(number);

let jsClass = true;
console.log(jsClass);

//==
//5=="5"

let x = 5;
let y = 7;
console.log(x + y);

let score = 70;
if (score >= 70) {
     console.log("Grade B");
} else if (score >= 60) {
     console.log("Grade B");
} else {
     console.log("Grade C");
}

let score1 = 70;
if (score1 >= 70) {
     console.log("Grade B");
} else {
     console.log("Grade C");
}

let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote" : "No, you cant vote";
console.log(canVote);

for (let i = 0; i <= 5; i++){
     console.log("iteration", i)
}

let fruits = ["Banana", "Apple", "Orange"];
//console.log(fruits[2]);
fruits.push("Mango");
console.log(fruits);
fruits.unshift("Biggy");
console.log(fruits)

let person = {
     name: "Esther",
     age: 25,
};
person.country = "Germany";
console.log(person)
let sentence = "My name is " + person.name + ". I am a " + person.age+(" years old.");
console.log(sentence)

let fullName = ["Esther", "Doe"];
let occupation = ["Web Developer"];
let country = ["Germany"];
let fullSentence = "My name is " + fullName.join(" ") + ". I am a " + occupation.join("") + ". I live in " + country.join(".");
console.log(fullSentence)
i++
i = i + 1

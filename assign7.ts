let persName: string = "Abdullah";
let quote: string = "ALLAH is one";
console.log(`${persName} said that ${quote}`);
console.log("Q3-------------")
let nameInLower = persName.toLowerCase();
console.log(nameInLower);
let nameInUpper = persName.toUpperCase();
console.log(nameInUpper);
let nameInTitleCase = persName;
console.log(nameInTitleCase);
console.log("Q4-------------")
let qot: string = "Always obey your elders.";
console.log(`Umar said that,"${qot}"`);
console.log("Q45------------")
let famPerson: string = "Neuton";
let quot: string = "Every action has a reaction";
console.log(`${famPerson} said that,"${quot}"`);
console.log("Q6-------------")
let pName: string = "\tUsman\n";
console.log(pName);
let trimNam: string = pName.trim();
console.log(trimNam);
console.log("Q-------------Q7+8")
console.log("The result of addition is =", 3 + 4);
console.log("The result of subtraction is =", 8 - 4);
console.log("The result of addition is =", 3 * 4);
console.log("The result of addition is =", 3 / 4);
console.log("Q9-------------")
let favNum: number = 1;
console.log(`My favourit number is ${favNum}`);
console.log("Q10-------------")
//The two number 3 and 4 is added in below.
console.log("The result of addition is =", 3 + 4);
//The process of multiplication is shown below.
console.log("The result of addition is =", 3 * 4);
console.log("Q11-------------")
let names = ["Aslam", "Akram", "Basheer", "cimab"];
for (let Name in names) {
  console.log(names[Name]);
}
console.log("Q12-------------")
for (let Name in names) {
  console.log("I am ", names[Name]);
}
console.log("Q13-------------")
let vehicl: string[] = ["Motorcycle", "car", "jeep"];
for (let Vehicl in vehicl) {
  console.log("I would like to own a ", vehicl[Vehicl]);
}
console.log("Q14-------------")
let friends = ["Aslam", "Akram", "Basheer", "cimab"];
for (let nam in friends) {
  console.log("My dear " + friends[nam] + "!" + "  I invite you in the party.");
}
console.log("Q15-------------")
let friend = ["Aslam", "Akram", "Basheer", "cimab"];
let frRemove = friend.shift();
console.log(friend);
console.log(frRemove);

let updatedList = friend.push("sajid");
console.log(friend);

for (let frnd in friend) {
  console.log(
    "My dear " + friend[frnd] + "!" + " I invite you in my birthday party."
  );
}
console.log("Q16-------------")
let bigTable = friend.push("ali", "muhsin", "hasnain");
console.log(friend);

for (let frd in friend) {
  console.log(
    "My dear " + friend[frd] + "!" + " I invite you in my big birthday party."
  );
}
let addInBigning = friend.unshift("Ahmad");
console.log(friend);

let addInMiddle = friend.splice(4, 0, "Munir");
console.log(friend);

let addInEnd = friend.push("Afzal");
console.log(friend);
for (let Frnd in friend) {
  console.log(
    "My dear " + friend[Frnd] + "!" + " I invite you in my birthday new party."
  );
}

console.log("Q17-------------")

for (let nm = 0; nm < friend.length; nm++) {
  var d = friend.pop();
  console.log(d + "  Not invite you ");
}
for (let mn = 0; mn < friend.length; mn++) {
  let e = friend.pop();
  console.log(e + " Not invite you ");
}
for (let ir in friend) {
  console.log(friend[ir] + " I invite you ");
}
console.log(friend);
friend.pop();
friend.pop();
console.log(friend);

console.log("Q-17------------ Again with 2nd method")
let Gest = ["ali", "Aslam", "Akram", "Raza"];
while (Gest.length > 2) {
  const removeGuest = Gest.pop()!;
  console.log(`Sorry ${removeGuest}, Alas! You are not joining us`);
}

for (const guest of Gest) {
  console.log(`Dear ${guest}, Congrats still invited to dinner.`);
}

Gest.pop();
Gest.pop();
console.log("Removed All elements");
console.log(Gest.length, Gest);
console.log("Q18-------------")
let places = ["Hunza", "Swat", "Malam Jaba", "Lahore", "Kashmir", "BabusarTop"];
//fron a-z
console.log(places);
let assend = [...places].sort((a, b) => a.localeCompare(b));
console.log(assend);
console.log(places);
//decending order
let decend = [...places].sort((a, b) => b.localeCompare(a));
console.log(decend);
console.log(places);
//arran
let orderCh1 = places.sort((a, b) => a.localeCompare(b));
console.log(orderCh1);
console.log(places);

console.log("------");
let orderCh2 = places.sort((a, b) => b.localeCompare(a));
console.log(orderCh2);
console.log(places);
console.log("Q19-------------")
console.log("The member of my guest arre", friends.length);
console.log("Q20-------------")
Countries: ["Pakistan", "Sudan", "Palestine", "DHA", "India"];
Cities: ["Faisalabad", "Lahore", "Quetta", "Multan", "Rawalakot", "Balakot"];
Language: ["Urdu", "Hindi", `Punjabi`, "English", "javascript", "python"];

console.log("Q21-------------")

let list: object = {
  Countries: ["Pakistan", "Sudan", "Palestine", "DHA", "India"],
  Cities: ["Faisalabad", "Lahore", "Quetta", "Multan", "Rawalakot", "Balakot"],
  Language: ["Urdu", "Hindi", `Punjabi`, "English", "javascript", "python"],
};
console.log(list);
console.log("Q22-------------")
let intenError = [3, 5, 8, 9, 2, 7, 4];
intenError[2] = intenError[9];
const error = intenError[2];
console.log(error);

intenError[2] = 8;
console.log(intenError);
console.log("Q23-------------")
let karachi = "big city";
console.log("Is karachi == 'big city' ? I predict true.");
console.log(karachi == "big city");

let book = "math";
console.log("Is book == 'urdu' ? I predict false");
console.log(book == "urdu");

let clas = "6th";
console.log("Is clas == '7th' ? I predict false");
console.log(clas == "7th");

let school = "high school";
console.log("Is school == 'high school' ? I predict true");
console.log(school == "high school");

let city = "lahore";
console.log("Is city == 'faisalabad' ? I predict false");
console.log(city == "faisalabad");

let province = "punjab";
console.log("Is province == 'punjab' ? I predict true");
console.log(province == "punjab");

let country = "pakistan";
console.log("Is country == 'itly' ? I predict false");
console.log(country == "itly");

let boy = "nomy";
console.log("Is boy == 'nomy' ? I predict true");
console.log(boy == "nomy");

let girl = "kirn";
console.log("Is girl == 'kirn' ? I predict true");
console.log(girl == "kirn");

let teacher = "aslam";
console.log("Is teacher == 'akram' ? I predict false");
console.log(teacher == "akram");

console.log("Q24-------------")
// • Tests for equality and inequality with strings
let smallNam: string = "ali";
let largeNam: string = "ALI";
console.log(
  smallNam == largeNam
    ? "yes small name is large name"
    : "no.  small name and large name are different thing"
); //because a and A are not equal

// • Tests using the lower case function
console.log(
  smallNam.toLowerCase() == largeNam.toLowerCase()
    ? "yes they are same"
    : "no they are not"
);

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 <= 5.1); //true
console.log(5 < 5.1); //true
console.log(5 > 5.1); //false
console.log(5 >= 5.1); //false

// • Tests using "and" and "or" operators
// in or any one must be true
console.log(
  "age" == "age" || "name" == "name" ? "Yes its true" : "No Both are false"
);
// in and both must be true
console.log(
  "age" == "age" && "name" == "name" ? "Yes its true" : "No any one is false"
);
// • Test whether an item is in a array
let arrCh = [3, 4, 5, 6];
console.log(`It is array or not ${arrCh} `, Array.isArray(arrCh)); //true as it is an array
// • Test whether an item is not in a array
let chkArr3 = true;
console.log(`it is an array or not ${chkArr3}`, Array.isArray(chkArr3)); //false it is boolean
console.log("Q25-------------")

let alianColour: string = "green";
console.log(
  alianColour == "green" ? "you earned five point" : "choose the colour"
);

console.log("Q26-------------")
let alianColour2: string = "yellow";
if (alianColour2 == "green") {
  console.log("you earned five point");
} else console.log("|you earned 10 points");

console.log("Q27-------------")
let alianColour3: string = "red";
if (alianColour3 == "green") {
  console.log("you earned five point");
} else if (alianColour3 == "yellow") {
  console.log("you earned ten point");
} else if (alianColour3 == "red") {
  console.log("you earned fifteen point");
}
console.log("Q28-------------")
let persAge: number = 18;
let persAgeResult =
  persAge < 2
    ? "Person is baby"
    : persAge >= 2 && persAge < 4
    ? "Person is Todler"
    : persAge >= 4 && persAge <= 13
    ? "Person is a kid"
    : persAge >= 13 && persAge < 20
    ? "Person is a teenager"
    : persAge >= 20 && persAge <= 65
    ? "Person is an adult"
    : persAge >= 65
    ? "Person is an elder"
    : "abcd";
console.log(persAgeResult);

console.log("Q29-------------")
let favorite_fruits1 = ["apple", "mango", `banana`];

for (let fruit in favorite_fruits1) {
  if (favorite_fruits1[fruit] == "pineapple") {
    console.log(`You really like ${favorite_fruits1[fruit]}`);
  }
  if (favorite_fruits1[fruit] == "tomato") {
    console.log(`You really like ${favorite_fruits1[fruit]}`);
  }

  if (favorite_fruits1[fruit] == "banana") {
    console.log(`You really like ${favorite_fruits1[fruit]}`);
  }
  if (favorite_fruits1[fruit] == "apple") {
    console.log(`You really like ${favorite_fruits1[fruit]}`);
  }
  if (favorite_fruits1[fruit] == "mango") {
    console.log(`You really like ${favorite_fruits1[fruit]}`);
  }
}
console.log("Q30-------------")
let userArr = ["Ali", "Admin", "akram", "Ahmad"];
for (let user in userArr) {
  if (userArr[user] == "Admin") {
    console.log(`Hello ${userArr[user]}, Would you like to see the report?`);
  } else console.log(`Hello ${userArr[user]}, Well come to login again.`);
}

console.log("Q31------------")
for (let user in userArr) {
  if (userArr[user] == userArr[user] && userArr[user] == "Admin") {
    console.log(`Hello ${userArr[user]}, Would you like to see the report?`);
  }
  if (userArr[user] == userArr[user] && userArr[user] !== "Admin") {
    console.log(`Hello ${userArr[user]},Well come to log in again`);
  } else console.log("We need some user");
}

console.log("Q32-------------")

let current_users1 = [
  "Ahmad",
  "Ali",
  "Subhan",
  "Hadi",
  "Hamza",
  "Jawad",
  "Hammad",
];
let new_users1 = ["ahMad", "ali", "Haider", "khaliq", "Taha"];

for (let user in new_users1) {
  if (current_users1[user].toLowerCase() != new_users1[user].toLowerCase()) {
    console.log(current_users1[user]);
    console.log(`${new_users1[user]} username is available`);
  } else {
    console.log(`${new_users1[user]} Username is not available`);
  }
}

console.log("Q33-------------")
let ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num in ordinalNumber) {
  if (ordinalNumber[num] == 1) {
    console.log(`${ordinalNumber[num]}st`);
  }
  if (ordinalNumber[num] == 2) {
    console.log(`${ordinalNumber[num]}nd`);
  }
  if (ordinalNumber[num] == 3) {
    console.log(`${ordinalNumber[num]}rd`);
  } else {
    console.log(`${ordinalNumber[num]}th`);
  }
}

console.log("Q34-------------")
let favouritPizza = ["HomeTown", "Maliboti", "Tike", "Fajita", "FireHouse"];
for (let pizza in favouritPizza) {
  console.log(`I Like  ${favouritPizza[pizza]} `);
}
console.log(`I Really Like Pizza`);

console.log("Q35-------------")
let animal = ["rabit", "cat", "parrot", "dog"];
for (let animy in animal) {
  console.log(`${animal[animy]} would make a good pet`);
}
console.log("Any of these animals would make a great pet!");

console.log("Q36-------------")

let make_Shirt = (size: string, text: string): any => {
  console.log(`The size is ${size} The text is "${text}"`);
};
make_Shirt("large", "play boy");

console.log("Q37-------------")

let make_Shirt1 = (
  size: string = "large",
  text: string = "I like TypeScript"
): any => {
  console.log(`The size is ${size} The text is "${text}"`);
};
make_Shirt1();
make_Shirt1("small", "I like TypeScript");
make_Shirt1("medium", "play boy");
console.log("Q38-------------")

let describe_City = (
  city: string = "karachi",
  country: string = "Pakistan"
) => {
  console.log(`${city} is in ${country}`);
};
describe_City("lahore", "Pakistan");
describe_City("paris", "France");
describe_City("New Yark", "America");
console.log("Q39-------------")

let describe_City1 = (
  city: string = "karachi",
  country: string = "Pakistan"
) => {
  console.log(`${city} , ${country}`);
};
describe_City1("lahore", "Pakistan");
describe_City1("paris", "France");
describe_City1("New Yark", "America");

console.log("Q40-------------")

let make_Album = (
  name: string,
  album_title: string,
  numberOftracks: number
): any => {
  let music_album = { name, album_title, numberOftracks };
  return music_album;
};
let album1 = make_Album("Ahmad", " men jwan hoon",7);
console.log(album1);
let album2 = make_Album("subhan", "ma houn Koun",8);
console.log(album2);
let album3 = make_Album("Typescript", "ma houn static", 321);
console.log(album3);
console.log("Q41-------------")
let magician1=["jozaf","jhon","robert","peter"];

for (let name in magician1){
    console.log(magician1[name])
  }
  
  console.log("Q42--------------------------")
  let magicianName6 = ["Zaid", "Bakar", "Taha", "Ahmad"];
let copyMagician5 = magicianName6.slice(); // Create a copy

let make_great5 = () => {
  for (let magician of magicianName6) { // Use for...of to iterate over elements
    magicianName6[magicianName6.indexOf(magician)] = "the Great " + magician;
  }
};

let show_magician5 = () => {
  for (let name of magicianName6) { // Use for...of to iterate over elements
    console.log(name);
  }
};

make_great5();
show_magician5();
  


  console.log("Q43-----------------------")

  let magicianName = ["Zaid", "Bakar", "Taha", "Ahmad"];

  let make_great = (names) => {
    let modifiedNames = names.map(name => "the Great " + name);
    return modifiedNames;
  };
  
  let show_magicians = (names) => {
    for (let name of names) {
      console.log(name);
    }
  };
  
  let modifiedMagicians = make_great(magicianName.slice()); // Create a copy and pass it to make_great
  show_magicians(magicianName);
  console.log("-----");
  show_magicians(modifiedMagicians);

  console.log("Q44 -----------------")

  function makeSandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
      console.log("No items in the sandwich.");
    } else {
      console.log("You ordered a sandwich with the following items:");
      for (let item of items) {
        console.log(`- ${item}`);
      }
    }
    console.log("======================");
  }
  
  // Call the function three times with different numbers of arguments
  makeSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
  makeSandwich("Ham", "Cheese");
  makeSandwich("Peanut Butter", "Jelly");

  console.log("Q45----------------------")

  function createCar(manufacturer, modelName, ...options) {
    let carInfo = {
      manufacturer: manufacturer,
      modelName: modelName,
    };
  
    for (let i = 0; i < options.length; i += 2) {
      let key = options[i];
      let value = options[i + 1];
      carInfo[key] = value;
    }
  
    return carInfo;
  }
  
  let carInfo = createCar("Toyota", "Camry", "color", "blue", "year", 2022, "sunroof", true);
  
  console.log(carInfo);
interface Human {
  //interface is just a skeleton of an Object
  name: string;
  age?: number; // ? to keep it optional to provide
}

export function greet(human: Human, date: Date) {
  const greeting =
    "Hello " +
    human.name.toUpperCase() +
    ", Today's date is\n" +
    date.toDateString();
  console.log(`TESTING HERE: ${flipCoin()}`);
  return greeting;
}

function flipCoin() {
  return Math.random() < 0.5;
}

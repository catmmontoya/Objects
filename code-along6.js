const myObj = {
  apples: {
    gala: 10,
    red: 5,
    "honey crisp": 7,
  },
  bananas: 7,
  pears: 5,
  kiwis: 9,
};

myObj.dragonFruit = 20; // adds a new object

delete myObj.kiwis;

console.log(Object.values(myObj));

//for ...in loops give you the key properties, not the values.
for (let fruit in myObj) {
  if (myObj[fruit] < 10) console.log(fruit); // loops through list to see which ones are less than 10.
}

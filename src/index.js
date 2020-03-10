// there is an array that looks like this
//in each nested array the 0 and 1 index
//or friends[i][0] and friends[i][1] are
//the friends on social media.
//friends[i][2] is the number of times
//friends[i][0] likes friends[i][1]
//friends[i][3] is the number of times
//friends[i][1] likes friends[i][0]
let friends = [
  ["Suraiya", "Maya", 10, 40],
  ["Sunita", "Richard", 0, 11],
  ["Damon", "Wesley", 6, 14],
  ["Eva", "Ramzi", 10, 11],
  ["Suraiya", "Sunita", 11, 7],
  ["Jordan", "Ramzi", 17, 18]
];

//object should look like:
//{"Suraiya":{"Maya": 40, Sunita: 7},
//"Maya":{"Suraiya": 10}
//"Sunita":{"Suraiya": 11, "Richard": 11}}

function likeLike(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {}
}

likeLike(friends);

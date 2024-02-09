// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to
// each of the usernames
const array_exl = []
array.forEach((user) => {
   array_exl.push(user.username + "!");
})


//Create an array using map that has all the usernames with a "?
// to each of the usernames

const array_ex2 = array.map((user) => {
  return user.username + "!";
})

// const array_ex3 = array.map(user =>  user.username + "!");
//Filter the array to only include users who are on team: red

const array_ex3 = array.filter(user => user.team === "red");

//Find out the total score of all users using reduce

const reduceArray = array.reduce((acc, user) => {
  return user.score + acc;
}, 0)

// (1), what is the value of i? indice of the array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	// console.log(num, i);
	// alert(num);
  // no console log  to make it pure
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const new_users = array.map(user => {
  const {username, team, score} = user;
  const new_user_items = user.items.map(item => {
    return item + "!";
  })
  const new_user = {
    username,
    team,
    score,
    new_user_items
  }
  return new_user;
})

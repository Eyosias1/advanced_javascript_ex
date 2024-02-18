const ztmMonsters = [
{id: 1, monster: 'Mr. Mouse', level: 1},
{id: 2, monster: 'Mac', level: 30},
{id: 3, monster: 'Denodude', level: 17},
{id: 4, monster: 'Pye', level: 5},
];

// Old Way
const advancedMonsters = ztmMonsters.filter(item => item.level > 15)
console.log(advancedMonsters)
console.log(advancedMonsters[advancedMonsters.length - 1])


// Using findLast()
const lastMonster = ztmMonsters.findLast(item => item.level > 15);
console.log(lastMonster);
// Using findLastIndex()
const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15);
console.log(lastMonsterIndex);


const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];

//Using reverse() reverses the array itself
const reverseMonsters = ztmMonstersList.reverse();
console.log(ztmMonstersList)
console.log(reverseMonsters)

//using toReversed()returns the reversed array
const reversedMonstersTo = ztmMonstersList.toReversed();
console.log(ztmMonstersList)
console.log(reversedMonstersTo)

//Using toSorted() returns an knew array with elements in ascending order
const sortedMonstersTo = ztmMonstersList.toSorted();
console.log(ztmMonstersList)
console.log(sortedMonstersTo)

//Using toSpliced() reduces the array and returns it
const spliceMonstersTo = ztmMonstersList.toSpliced(2, 1);
console.log(ztmMonstersList)
console.log(spliceMonstersTo)

//Old Way
ztmMonstersList[1] = 'Gost';
console.log(ztmMonstersList)

// Using with()
const withMonsters = ztmMonstersList.with(1, 'Gost');
console.log(ztmMonstersList)
console.log(withMonsters)

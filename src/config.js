import ninjas from "./assets/ninjas";

const config = [
  {
    lvlNum: 0,
    lvlName: 'Data Types',
    lvlColor: '#CCCC99',
    description: 'New ninjas learn about data in JavaScript. How many types of data are there?',
    lvlNinja: ninjas.ninja,
    lvlBelt: 'no',
    nextLvlBelt: 'white',
  },
  {
    lvlNum: 1,
    lvlName: 'Variables',
    lvlColor: '#BBBBBB',
    description: 'White-belt ninjas will learn about variables - what they are, how they work, and how we can use them in JavaScript.',
    lvlNinja: ninjas.white,
    lvlBelt: 'white',
    nextLvlBelt: 'yellow'
  },
  {
    lvlNum: 2,
    lvlName: 'Operators',
    lvlColor: '#BAB957',
    description: 'Yellow-belt ninjas will learn about operators in JavaScript, and how they can help us with logic.',
    lvlNinja: ninjas.yellow,
    lvlBelt: 'yellow',
    nextLvlBelt: 'orange',
  },
  {
    lvlNum: 3,
    lvlName: 'Conditional Logic',
    lvlColor: '#BA9957',
    description: 'Orange-belt ninjas will learn about conditional logic - code that runs only under certain conditions.',
    lvlNinja: ninjas.orange,
    lvlBelt: 'orange',
    nextLvlBelt: 'green',
  },
  {
    lvlNum: 4,
    lvlName: 'Arrays',
    lvlColor: '#5ECB65',
    description: 'Green-belt ninjas will learn about arrays, which are lists of values in JavaScript.',
    lvlNinja: ninjas.green,
    lvlBelt: 'green',
    nextLvlBelt: 'blue'
  },
  {
    lvlNum: 5,
    lvlName: 'Loops',
    lvlColor: '#5A73AE',
    description: 'Blue-belt ninjas will learn about loops, which can repeat blocks of JavaScript code for us.',
    lvlNinja: ninjas.blue,
    lvlBelt: 'blue',
    nextLvlBelt: 'purple',
  },
  {
    lvlNum: 6,
    lvlName: 'Functions',
    lvlColor: '#8D56AE',
    description: 'Purple-belt ninjas will learn about functions - blocks of code that perform a task for us.',
    lvlNinja: ninjas.purple,
    lvlBelt: 'purple',
    nextLvlBelt: 'brown'
  },
  {
    lvlNum: 7,
    lvlName: 'More Functions',
    lvlColor: '#BA8457',
    description: 'Brown-belt ninjas will learn about more advanced functions.',
    lvlNinja: ninjas.brown,
    lvlBelt: 'brown',
    nextLvlBelt: 'red',
  },
  {
    lvlNum: 8,
    lvlName: 'Challenge',
    lvlColor: '#BA5A57',
    description: 'Red-belt ninjas will be tested on everything they have learned about JavaScript so far.',
    lvlNinja: ninjas.red,
    lvlBelt: 'red',
    nextLvlBelt: 'ninja'
  },
  {
    lvlNum: 9,
    lvlName: 'Code Ninja',
    lvlColor: '#666666',
    description: 'Black-belt ninjas are true Code Ninjas. Perhaps one day you will be even better than Sensei!',
    lvlNinja: ninjas.ninja,
    lvlBelt: 'black',
    nextLvlBelt: 'ninja'
  },
];

export default config;

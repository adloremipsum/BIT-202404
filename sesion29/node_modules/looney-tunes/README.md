# Welcome to Looney Tunes Library!

## "What's up, doc?”

![Looney Tunes NPM Library](https://www.cartonionline.com/wordpress/wp-content/uploads/2021/10/painel-1x65cm-looney-tunes-festa-infantil-1000x600.jpg)

## Installation
```js
$ npm install looney-tunes
```

## Usage
To use the Looney Tunes library in your project, import it as follows:
```js
const looneyTunes = require('looney-tunes');
```

## Functions
### 1. all()
This function retrieves information about all Looney Tunes characters available.

Returns: An array of Looney Tunes characters.
### Example: 
```js
const allLooneyTunes = looneyTunes.all();
console.log(allLooneyTunes);
```

***

### 2. names()
This function retrieves a list of all Looney Tunes character names available.

Returns: An array containing names of all Looney Tunes characters.
### Example: 
```js
const looneyNames = looneyTunes.names();
console.log(looneyNames);
```

***

### 3. random()
This function retrieves a random Looney Tunes character.

Returns: A single random Looney Tunes character.
### Example: 
```js
const randomLooneyTune = looneyTunes.random();
console.log(randomLooneyTune);
```

***

### 4. getLooney(looneyName)
This function retrieves details about a specific Looney Tunes character based on the provided name in the parameter.

Returns: Information about the specified Looney Tunes character.
### Example: 
```js
const looneyName = 'Bugs Bunny';
const looneyDetails = looneyTunes.getLooney(looneyName);
console.log(looneyDetails);
```

***

### 5. friends(looneyName)
This function retrieves the list of friends of a specific Looney Tunes character based on the provided name.

Returns: An array of friends of the specified Looney Tunes character.
### Example: 
```js
const looneyName = 'Porky Pig';
const looneyFriends = looneyTunes.friends(looneyName);
console.log(looneyFriends);
```

***

### 6. enemies(looneyName)
This function retrieves the list of enemies of a specific Looney Tunes character based on the provided name.

Returns: An array of enemies of the specified Looney Tunes character.
### Example: 
```js
const looneyName = 'Elmer Fudd';
const looneyEnemies = looneyTunes.enemies(looneyName);
console.log(looneyEnemies);
```

***

## Console Log Outputs

1. all(): The output will be an array of Looney Tunes characters with their details.
2. names(): The output will be an array containing names of all Looney Tunes characters.
3. random(): The output will be a single random Looney Tunes character with its details.
4. getLooney(looneyName): The output will be information about the specified Looney Tunes character.
5. friends(looneyName): The output will be an array of friends of the specified Looney Tunes character.
6. enemies(looneyName): The output will be an array of enemies of the specified Looney Tunes character.

***

Please note that the console log outputs will display the relevant information when the functions are called correctly.

Remember to handle errors appropriately, such as incorrect input, using try-catch blocks when calling these functions.

Also, Looney Tunes is an experimental library, and it may have some limitations or occasional bugs. We are committed to continuously improving and resolving any issues that may arise over time. Your feedback and support are invaluable in helping us enhance the library's functionality and reliability. Thank you for your understanding and patience as we work towards delivering a more robust and dependable experience.










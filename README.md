# Assignment - Promises

> Controlling parallelism with promises

[![Build Status](https://travis-ci.org/helio-training/fs-corejs-asyncronous-promises.svg?branch=solutions)](https://travis-ci.org/helio-training/fs-corejs-asyncronous-promises)

## Introduction

Callbacks were the first way we encountered to control parallel execution.  In that model, the function was notified with a function that contained at minimum an Error object as the first parameter with any additional information passed through as additional parameters.
  
The problem with callbacks can be observed when multiple tasks are ran together and 'callback hell' or 'the cone of shame' would occur.  As we continued to process asynchronous calls we would next the inner functions with more callbacks and exacerbated the problem further.
 
Promises were decided as the preferred mechanism due to the simplified protocol, the ability to chain calls, and `catch` and error at the very end of instead of our code that was scattered inside of the callbacks checking for errors.

### The Static Functions on Promise

The Promise object has a few static functions that help create, control, and simplify development with promises.  

* `Promise.resolve()` - Determines if the value passed into the function is a value or a promise.  When it's a value it wraps the value in a promise.  The value is resolved and passed to the `.then()`. [.then() Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
 
* `Promise.reject()` - Wraps an error object in a promise and ensures the catch condition is executed on the calling promise object. [.reject() Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)
   
* `Prromise.all([Promise])` - Takes an array of promises and executes them in parallel.  The result is a promise that won't resolve until all of the promises in the function have resolved or errored.  When any of the promises resolve to an error state the catch function will be executed, and the other results will be ignored.  [.all() Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
   
* `Promise.race([Promise])` - The race stops executing when a the first promise resolves or rejects.  [.race() Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)


### Promise Instance

Unfortunately, not all functions return a promise. When a callback is encountered, you may need to `promisify` the function call by wrapping it with a promise.  This is done by creating a new instance of a Promise.  

This is an example of promisifying a call to the readFile function.

```js
/**
*    This is called the executor function, and takes two parameters.  The parameters are functions and 
*    help the promise resolve or reject.
*               |
*               |
*               v
*/
new Promise((resolve, reject) => {
  FS.readFile(path, (err, file) => {
    if(err) return reject(err);
    
    return resolve(file);
  });
});
```

By doing this we can now interact normally with the promise, even though it returns a callback. There are libraries that can help promisify the code.  `Bluebird` is an example of such a library.


## Assignment

> For this assignment we will be interacting with the [Pokemon API](https://pokeapi.co/docsv2/#).  Use this package to interact with the api: `pokedex-promise-v2` 

1. Using the package `pokedex-promise-v2`
2. Export a function `allPokemon` that returns all the pokemon.
    1. Sort the array by name
3. Create and export a function `allItems` that returns all the items.
    1. Create an array that contains only the names of the items.
    2. Sort the array of names






### Resources 

* https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53#.dhcm1ydpf
* https://developers.google.com/web/fundamentals/getting-started/primers/promises
* [Promise Specification](https://promisesaplus.com)
* http://www.mattgreer.org/articles/promises-in-wicked-detail/

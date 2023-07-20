# Module system

There are two modules system:
* CommandJS (used in Node.js)
* ES modules -  (used in browser and Node.js)

## ES module system
Is the official module system introduced in ECMAScript 6 (ES). It is supported both from nodeJS and web browsers.

__ES module system uses:__
* export
* Import

One important thing, is ES modules system __does not allow dynamic import__.

__Examples for exporting:__
```js
//For exporting one by one
export function SomeFu() {};
export const someArrow = () => {}
export const answer = 42;
export class User {};

//Default export
export default newFunc; // allows to import with out {}

//For changing the name
export {secondCounter as sndCounter};

//For exporting multiple things at once
export {someFu, someArrow, answer, User}
```

We can also export multiple files in only one module, so we can import all of them using only one import.
```js
index.js{
    export{plus} from ...;
    export {mimus} from ...;
    export {default as multiple} from ...;
}
```

__Examples for importing:__
```js

//Default import
import someFunc from ...; //imports default export and asign it to the variable someFunc

//Other ways to import
import {someFu} from ...;
import defaultExp, {someFu1, someFu2, someFu3 as awsFu} from ...

//Changing import name
import {secondCounter as sndcounter} from ...; 

//Importing multiple content from same module
import * as helperModule from ...;
{
    //function imported from the module
    helperModule.sort();
    helperModule.otherFunc();
}

//Importing a script that runs automatically
import 'script.js';

//Importing as dynamic import, so you can import at runtime. In this way, a promise is returned
import('./module')
  .then(module => {
    // Access functions or values from the imported module
    module.function1();
    module.function2();
  })
  .catch(error => {
    // Handle any errors that occurred during the import
    console.error('Failed to import module:', error);
  });
```

## CommonJS module system
It is the defaoult module system in Node.js, it is only supported in node.JS.

Something important, is that it does not have default import, but we can simulate it asignig the variable to its _export.modules_ object. 

__CommonJS module system uses:__
* module.exports
* require

__Examples for exporting:__

```js
//For exporting one by one
module.exports.someVar = 42;
module.exports.someFunc = () => {};
module.exports = {newFunc};

//Default export
module.exports = someFunc; //check it does not have {}

//Exporting multiple files
module.exports = {
    newFunc,
    newVar,
}
```

__Examples for importing:__
```js
//Importing one by one
const someVal = require(...);
const someFunc = require(...);

//Default import
const someFunc = require(...)

//For importing multiple things
const {newFunc, variable, sortFunc} = require(...);

//We can import dinamically, so the module will load only if necessary
if(op == 'minus'){ 
	fun = require('path');
}
```

### CommonJS modules vs ES modules
```Info takeng from chatGPT, it is okay```

__Syntax:__ CommonJS uses the require() function to import modules and the module.exports or exports object to export values from a module. ES Modules use the import and export keywords for importing and exporting modules, respectively.

__Browser Support:__ CommonJS is primarily used in server-side environments, such as Node.js, where modules are loaded synchronously. ES Modules, on the other hand, are designed for modern web browsers and support asynchronous module loading. They are also supported in recent versions of Node.js.

__Static vs Dynamic:__ CommonJS modules are loaded and executed at runtime, allowing dynamic behavior like conditionally importing modules. ES Modules are statically analyzed, meaning imports and exports are resolved during the module's parsing phase. This allows for better optimization and tooling support.

__Default Exports:__ CommonJS does not have a built-in mechanism for default exports. ES Modules support default exports, allowing you to export a single value as the default export from a module.

__Circular Dependencies:__ CommonJS allows circular dependencies between modules, where Module A can require Module B, and Module B can require Module A. ES Modules do not support circular dependencies, and attempts to create circular dependencies will result in runtime errors.

__Dynamic Loading:__ CommonJS modules are loaded synchronously, which means they are only loaded when the require() function is called. ES Modules, on the other hand, support dynamic loading with the import() function, allowing modules to be loaded asynchronously.

## Optimization for imports
```
Info taken from chatGPT, it seems it is okay.
```

In JavaScript module systems, __when dealing with modules that have interdependencies__, a __dependency graph is constructed__ to manage and resolve those dependencies. The dependency graph represents the relationships between modules, helping ensure that modules are loaded in the correct order and avoiding circular dependencies.

__Here's how the process typically works:__

1. __Module Parsing:__ When a module is encountered, its code is parsed, and import statements are identified.
2. __Dependency Resolution:__ The imported module dependencies are resolved based on the import statements. This involves identifying the referenced modules and their paths.
3. __Dependency Graph Construction:__ As modules are parsed and their dependencies are resolved, a dependency graph is constructed. The graph represents the relationships between modules and their dependencies. It may be stored internally by the JavaScript runtime or managed by a module bundler.
4. __Topological Sorting:__ Once the dependency graph is constructed, a topological sorting algorithm is applied to determine the order in which modules should be executed. This ensures that modules are executed after their dependencies have been resolved.
5. __Module Execution:__ Following the sorted order from the topological sorting, modules are executed one by one. Exported values from each module are made available for import statements in other modules.

6. __Circular Dependency Handling:__ If circular dependencies are detected during the graph construction or topological sorting, appropriate mechanisms are implemented to handle or report the circular dependencies. Circular dependencies occur when two or more modules directly or indirectly depend on each other.
The dependency graph and the process of resolving and executing modules based on their dependencies allow for a structured and efficient management of module interdependencies. It ensures that modules are loaded in the correct order, preventing issues like "undefined" imports or circular dependencies that could cause runtime errors.

## How to avoid multiple imports or initialization of same thing

Using a technique called __memoization__, which involves caching the result of an expensive operation and returning the cached result for subsequent calls instead of re-computing, 

__Example of memoization:__
```js
let cachedImport;

function getModule() {
  if (!cachedImport) {
    cachedImport = require('./module');
  }
  return cachedImport;
}

// Usage
const myModule = getModule();

```
### __The caching problem__

```Info taken from chatGPT, it is okay.```

__Caching in JavaScript modules can sometimes lead to potential problems__, particularly when dealing with mutable or stateful modules. Here are a few challenges and considerations to keep in mind:

1. __Stale Data:__ If the imported module contains mutable state or data that can change over time, caching the module can result in stale data. This can lead to unexpected behavior when the cached module is reused across different parts of your codebase. If the module's state needs to be updated or refreshed, caching the module may not be appropriate.

2. __Module Reinitialization:__ In some cases, you may need to reinitialize or reset the imported module. Caching the module can prevent this reinitialization from occurring since subsequent calls will return the cached module. If the module requires reinitialization or you need to ensure a fresh instance on each import, caching may not be suitable.

3. __Dynamic Imports:__ Caching can be problematic when working with dynamic imports, where the module to be imported is determined at runtime. Since the dynamic import may vary, caching can interfere with the expected behavior. In such cases, it's crucial to ensure that the caching mechanism aligns with the dynamic nature of the imports.
# Path module

The Path module provides a way of working with directories and file paths. 

[More information in web](https://www.w3schools.com/nodejs/ref_path.asp)

__Examples for writing path__
* __' ./ '__ : starts path in a relative way from where it is executed
* __' ../ '__ : every extra point from the relative path ' ./ ' goes one folder back
* __' / '__ : goes to absolute path of the pc

## require.resolve(module-name)

Is a way to resolve the path of a module. It uses the module resolution algorithm.

1. It starts by looking for a directory named node_modules in the current directory.
2. If the module is found in the current node_modules directory, it resolves to that location.
3. If not found, it moves up to the parent directory and repeats the process.
4. This continues until the module is found or the process reaches the root directory.

__Globally__ node modules are installed at:
```bash
$HOME/.node_modules
$HOME/.node_libraries
$PREFIX/lib/node
```



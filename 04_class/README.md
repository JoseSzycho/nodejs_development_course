# Class 04

__Main concepts:__
* Package manager
* Semantic Versioning

## Package manager

A package manager is a tool developers use to automate finding, downloading, installing, configuring, upgrading, and removing a system's packages.

### Why Do You Need a Package Manager?

Suppose there were no package managers. In that case, you would have to do the following manually:

* Find all the correct packages for your project
* Verify that the packages don't have any known vulnerabilities
* Download the packages
* Install them at the appropriate location
Keep track of new updates for all your packages
* Upgrade each package whenever there is a new release
* Remove the packages you no longer need
* Manually managing tens or hundreds of packages is a tiresome and time-consuming endeavor.

Therefore, package managers—such as NPM, pNPM, Bower, and Yarn—help automate and eliminate the tedious process of managing all your packages manually.

### How a packet manager works

1. __Package.json:__ Every JavaScript project that uses a package manager typically contains a file named package.json. This file serves as a manifest for the project and includes metadata about the project and its dependencies. It lists all the dependencies required for the project to work correctly.

2. __Dependency Management:__ When you need to use an external library or module in your JavaScript project, you can declare it as a dependency in the package.json file. The package manager uses this file to keep track of the required dependencies for your project.

3. __Dependency Installation:__ To fetch and install the declared dependencies, you run a command in the terminal (or command prompt) such as npm install or yarn install. This command tells the package manager to read the package.json file, fetch all the required packages from the central repository (usually the npm registry), and install them in a node_modules directory within your project.

4. __Versioning:__ Each dependency can have a specified version range in the package.json file. These version ranges define the allowed versions of the package that can be installed. For example, a package can be specified as "lodash": "^4.17.21", which means any version of lodash with a major version of 4 and a minor version greater than or equal to 17 can be installed. This allows developers to have flexibility while ensuring that the project is using compatible versions of the dependencies.

5. __Dependency Resolution:__ When resolving dependencies, the package manager also takes care of any transitive dependencies, i.e., dependencies of dependencies. It ensures that the correct versions of all required packages are installed to avoid version conflicts.

6. __Lock Files:__ To ensure consistency across different environments and to prevent accidental upgrades or changes in dependency versions, most package managers create a lock file, such as package-lock.json or yarn.lock. This file keeps a record of the exact versions of all installed dependencies and their transitive dependencies.

7. __Updating Dependencies:__ Periodically, you might want to update your project's dependencies to benefit from bug fixes and new features. You can update individual packages or use specific commands like npm update or yarn upgrade to update the packages while respecting the version constraints defined in the package.json file.

8. __Publishing Packages:__ Apart from using packages, developers can also publish their own packages to the central repository. This allows others to use their code as a dependency in their projects.

### Some examples of packet managers
* __YUM:__ is a high-level package management tool that simplifies the process of installing, removing, and updating software packages on RPM-based Linux distributions.
* __RPM:__ is a powerful package management system for RPM-based Linux distributions
* __NPM (Node Package Manager):__  is the default. official and most widely used package manager for Node.js.
* __YARN:__ introduced by Facebook as a response to some of the limitations of NPM. It provides improved performance, security, and consistency in dependency resolution.
* __PNPM:__ PNPM is an alternative package manager for Node.js projects that aims to provide faster and more efficient dependency management. It uses hard links.

### Package vs module

#### Module
__A module in NodeJS__ is any file in the node_modules folder that the computer can load through Node's require() function.

```js
const myModule = require("./codesweetly.js");
```
__A module is not a package__ if it does not have a package.json file used to record information about it.

#### Package
__A package__ is a directory (or project) that has a package.json file used to record information about it.

A package is a collection of related code and resources that are bundled together for distribution and reuse. Packages are usually used in the context of package managers like NPM for JavaScript or PyPI for Python. In the context of package managers, a package is essentially a compressed archive that contains a library or module along with metadata (e.g., name, version, dependencies). 

It allows developers to distribute and share code more easily and facilitates the installation and management of dependencies in projects. A package can contain one or more modules or libraries.


### Most popular packet managare differencies

We will provide principal characteristics for:
* NPM
* YARN
* PNPM

__In speed comparison:__ PNPM (fastest) > YARN > NPM 

#### YARN

* __Workspaces__ are a feature that allows developers to manage multiple related packages within the same repository (monorepo). Packages can share dependencies and more

* __Automatic handling dependencies in lock files:__ The main idea behind this feature is to automatically detect when the yarn.lock file is outdated and make sure it gets updated appropriately. This helps prevent discrepancies between the yarn.lock file and the actual installed dependencies, which could lead to inconsistencies when working in collaborative environments or across different systems.

* __Selective dependecy resolution:__ Yarn supports selective version resolutions, which lets you define custom package versions or ranges inside your dependencies through the resolutions field in your package.json

* __Yarn upgrade-interactive:__ is a command provided by Yarn that allows developers to interactively upgrade dependencies in a project. This command provides a user-friendly interface that lets you view and select which packages to update and which versions to upgrade to.

* __Parallel instalation:__ faster than NPM

* __Offline instalation:__ it allows to install offline any package that was installed in the past

* __Concise duplication:__ packages are always installed in the same order, so it will alwys be exactly the same lock file be installed in the same way in different computers.

#### PNPM

The main purpose of PNPM is to hold all the packages at a global (centralized) store and use them if needed by other projects too by creating hard links to it.

- Saves a huge amount of disk space.
- Takes faster time to install the packages.
- It has in-built support for mono repositories.

* __Hard links:__ Instead of copying the package files multiple times for different projects, PNPM creates a single shared copy and uses symbolic links to make the package available to each project that depends on it.

https://www.freecodecamp.org/news/javascript-package-manager-npm-and-yarn/

## NPM

npm stands for "Node Package Manager." It is a package manager for JavaScript programming language, primarily used with Node.js runtime. npm allows developers to easily install, share, and manage packages or libraries of code created by other developers to solve common programming tasks or add functionality to their projects.

### How NPM works

In the past, NPM used to work duplicating depdencies if it was neccesary, for example in a case wher you install two dependencies, if both dependecies uses the same dependencies, they were duplicated instead of being shared, that caused to use lot of mememory and bein slow. Now this is solved.

1. __Initializing a Project:__ To start using NPM in a Node.js project, you need to initialize it by running __npm init__ command in the terminal. This command creates a __package.json__ file in the root directory of your project. __The package.json__ file serves as a manifest that contains metadata about your project, such as the project name, version, description, entry point, and dependencies.

2. __Defining Dependencies:__ After initializing the project, you can add external libraries (dependencies) that your project requires. You can do this manually by editing the package.json file and adding dependencies under the dependencies or devDependencies field. Alternatively, you can use the __npm install command__ with the __--save__ or __--save-dev__ flags to automatically add the dependencies to your package.json file.

3. __Installing Dependencies:__ Once you've defined the dependencies in your package.json file, you need to install them. Running __npm install__ in the terminal reads the package.json file, fetches all the required packages from the npm registry (https://www.npmjs.com/ - the default centralized repository for JavaScript packages), and installs them in a directory named node_modules in your project's root directory.

4. __Versioning and Dependency Resolution:__ In the package.json file, each dependency can have a specified version range defined using semantic versioning. When you run npm install, NPM ensures that the correct versions of all required packages and their dependencies are installed to avoid version conflicts. It generates a package-lock.json file that records the exact versions of the installed packages to ensure consistency across different installations.

5. __Updating Dependencies:__ Periodically, you may want to update your project's dependencies to benefit from bug fixes and new features. You can do this by running npm update or installing specific package versions manually. NPM will fetch the latest versions allowed by the version range specified in the package.json file and update the packages accordingly.

6. __Publishing Packages:__ NPM allows developers to publish their own packages to the npm registry, making them available for others to use. To publish a package, you need to create an account on the npm website and use the npm publish command in your package's directory.

Overall, NPM streamlines the process of managing dependencies and distributing packages, making it an essential tool for Node.js and JavaScript developers. It ensures that projects can easily use external libraries while maintaining version consistency and package integrity.

### Some commands

__npm install package-name --save :__ --save flag is defaoult. This flag was used to save the installed package as a regular dependency in the "dependencies" section of "package.json." Regular dependencies are those required for the application to run correctly in production.

__npm install package-name --save-dev :__ This flag is used to save the installed package as a development dependency in the "devDependencies" section of "package.json." Development dependencies are those required for development and testing purposes but not necessary for the production runtime. For example:


__npm i:__ short hand for __npm install__. 

__npm root -g :__ indicates where the root for global installs is located

__npm update: __ This command will update all the packages listed to the latest version (specified by the tag config), respecting the semver constraints of both your package and its dependencies (if they also require the same package).
```bash
npm update [<pkg>...]

aliases: up, upgrade, udpate
```
### npm scripts

npm scripts are custom scripts defined in the "package.json" file of a Node.js project. These scripts allow developers to run various commands and automate tasks related to their project's development, testing, building, and deployment. npm scripts are an essential feature of npm, and they provide a convenient way to execute complex or repetitive tasks using simple commands.

To define an npm script, you add a "scripts" section in your "package.json" file, where each script is associated with a name and a command.

```JSON
// Example
"scripts": {
  "start": "node index.js",
  "test": "mocha",
  "build": "webpack",
  "lint": "eslint src",
  "deploy": "npm run build && rsync -avz dist/ user@example.com:/var/www/app"
}
```

__"start":__ This script runs the command node index.js when you run __npm start__. It is often used to start your application.

__"test":__ This script runs the command mocha when you run __npm test__. It is typically used to execute test suites.

__"build":__ This script runs the command webpack when you run __npm run build__. It is used to bundle and build your application.

__"lint":__ This script runs the command eslint src when you run __npm run lint__. It is used to perform code linting on the "src" directory.

### package.json


In the "package.json" file of a Node.js project, the "description" field is used to provide a brief description of the project. It serves as a way to give a concise overview of what the project is about and what its main purpose is. This description can be helpful for other developers who come across your project on npm (the Node Package Manager) or when sharing your project with others.

```JSON
// Example
{
  "name": "my-awesome-project",
  "version": "1.0.0",
  "description": "An amazing Node.js project that does awesome things.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "mocha",
    "build": "webpack"
  },
  "author": "John Doe",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "lodash": "^4.17.21"
  }
}
```
### package-lock.json


The "package-lock.json" file is an automatically generated file by npm that is used to keep track of the exact versions of dependencies and their transitive dependencies installed in a Node.js project. This file is primarily used for deterministic and consistent dependency resolution.

Unlike the "package.json" file, the "package-lock.json" file is not meant to be manually edited or maintained by developers. Instead, npm handles its generation and updates automatically whenever you install or update dependencies using the npm install command.

__The "package-lock.json" file includes the following information:__

1. __Exact Versions:__ It lists all the dependencies installed in your project along with their exact version numbers. This ensures that the same versions of dependencies are installed by anyone else who runs npm install on your project, avoiding version mismatches and inconsistencies.

2. __Transitive Dependencies:__ It also includes the full tree of transitive dependencies, meaning all the dependencies that are required by the direct dependencies. This tree ensures that all dependencies in your project are compatible and correctly resolved.

3. __Integrity Hashes:__ It includes integrity hashes for each installed package. These hashes are used to verify the integrity of the downloaded packages, ensuring they have not been tampered with or corrupted.

4. __Locking Mechanism:__ The "package-lock.json" file acts as a locking mechanism, preventing unintended updates to dependencies when using the npm install command. It ensures that only the exact versions specified in the lock file are installed, even if newer versions are available in the npm registry.

The "package-lock.json" file is crucial for collaborative projects and for ensuring that the development environment of all contributors remains consistent. It helps to avoid unexpected changes in dependencies, making the project more stable and reliable.

When you share your project with others or use it on a different machine, the "package-lock.json" file ensures that the same versions of dependencies are installed, providing a consistent environment for everyone working on the project.

### Looking for certain version

Examples:

* __~1.5.2 :__ "~" indica que se puede instalar o actualizar hasta la ultima versión de patch version

* __^1.5.2 :__ "^" indicates que can install or update till the latest version of minor version.

* __*1.5.2 :__ * indicates to install or upgrade to the latest version.

*  __2.2.2 - 2.2.9 :__ indicates a valid range of version

* __We can also create range version using logical operators, example :__ < 2.1.0 || > 2.6.0

## npx

__npx__ is used to execute Node.js packages that are not globally installed. It allows you to run a Node.js binary from a package without having to install the package globally or adding it to your project's dependencies. This is particularly useful when you want to run a one-time command or a utility from a package without polluting your system or project with unnecessary dependencies.

```js
// Example, if there is a command-line utility called "example-tool" provided by a package called "example-package," you can run it using npx like this:
npx example-package example-tool
```

__npx__ will first check if the "example-package" is installed locally in the current project's __node_modules folder__. If it is not found, it will download the latest version of the package from the npm registry and then run the "example-tool" command from that package.

## Semantic Versioning

[More information at semver.org.](https://semver.org/)

Semantic versioning is used for versioning develpments. The next syntax is used:

* __x.y.z :__ where;
  * __x :__ major version
  * __y :__ minor version
  * __z :__ patch version

__x.y.z are always integer numbers that starts at zero and grows up.__

### How to increment numbers
* __0.y.z :__ indicates app still in development

* __Patch version Z (x.y.Z | x > 0)__ MUST be incremented if only backward compatible bug fixes are introduced. A bug fix is defined as an internal change that fixes incorrect behavior.

* __Minor version Y (x.Y.z | x > 0)__ MUST be incremented if new, backward compatible functionality is introduced to the public API. It MUST be incremented if any public API functionality is marked as deprecated. It MAY be incremented if substantial new functionality or improvements are introduced within the private code. It MAY include patch level changes. Patch version MUST be reset to 0 when minor version is incremented.

* __Major version X (X.y.z | X > 0)__ MUST be incremented if any backward incompatible changes are introduced to the public API. It MAY also include minor and patch level changes. Patch and minor versions MUST be reset to 0 when major version is incremented.

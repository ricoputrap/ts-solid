# SOLID Principles

- **Single Responsibility Principle (SRP)** - a class should have one and only one task/responsiblity.

- **Open/Closed Principle (OCP)** - software entities (classes, modules, functions, etc.) should be open for extension, but closed for modifications. Design and implementation should be done in such a way that new functionalities may be introduced with the least amount of code modification.

- **Liskov Subtitution Principle (LSP)** - the derived class should be able to subtitute the base class without violating the intent or semantics of the abstraction it is inheriting from or implementing.

- **Interface Segregation Principle (ISP)** - an interface should be responsible for a specific task. Clients should not be forced to depend upon method that they do not use.

- **Dependency Inversion Principle (DIP)** - each module should be separated from others using an abstract layer which binds them together. The higher-level policy abstractions drive the implementation details, not the other way around.

*source: [Practical Use Of SOLID Design Principles In Code](https://medium.com/codex/practical-use-of-solid-design-principles-in-code-fadb16869618) by [Kanika Modi](https://iamkanikamodi.medium.com/)*

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install this project and play with yourself in your own computer.

```bash
npm install
```

## How to compile and run the app using CLI

```bash
# compile
tsc

# run
node build/index.js
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Extras
How to initiate a new TypeScript project? [See here](https://www.digitalocean.com/community/tutorials/typescript-new-project)

## License
[MIT](https://choosealicense.com/licenses/mit/)